import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { emptyContent } from 'src/app/shared/emptyContentValidator';
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation,]);
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit, OnDestroy {
  profileOnHover: number = -1
  profileOnHoverSwiper: any = -1
  postLoading: boolean = false
  modalRef: BsModalRef
  editContentForm: FormGroup
  editImgForm: FormGroup
  postImage: any
  imgUrl: any
  deletePostLoading: boolean = false
  seeMoreIndex = -1
  editTextOrImgPost: string = ''
  chosenPostToEdit: any
  swiperLoadingCount: any = []
  postComments: any = []
  postCommentsIndex: any = -1
  commentsLoading: boolean = true
  subscriptions: any[] = [];
  editCommentIndex: any = -1
  enterESCtoCancel:boolean=true
  popupPost:any
  popupReactions:any
  reactions:any = [
    {imgSrc:"assets/like.png",reaction:"like"},
    {imgSrc:"assets/love.png",reaction:"love"},
    {imgSrc:"assets/haha.png",reaction:"haha"},
    {imgSrc:"assets/wow.png",reaction:"wow"},
    {imgSrc:"assets/sad.png",reaction:"sad"},
    {imgSrc:"assets/angry.png",reaction:"angry"},
  ]
  postReactions:any=[]
  sortReaction:any = []
  reactionModalImgSrc:any=""
  filterReactions:any=''
  reacionsModaClassIndex:any=-1
  
  @ViewChild('editCommentInpu', { static: false }) editCommentInpu: ElementRef
  @ViewChild('addCommentInput', { static: false }) addCommentInput: ElementRef
  constructor(public userProfilesService: UserProfileService,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private rendrer: Renderer2,
    private _snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    private commentService: CommentSocketService,
    private router:Router
  ) {
  }


  ngOnInit(): any {
    window.scroll(0,0)
    this.swiperLoadingCount.length = 5
    // start listen to users comments to push the comment in the comments array
    this.commentService.listen("comment").subscribe(
      (res: any) => {
        this.getPostsAfterEdit()
        if (this.postCommentsIndex != -1 &&
          this.userProfilesService.userPosts[this.postCommentsIndex]._id == res.comment?.post._id) {
          let newComment = {
            comment: res?.comment?.comment,
            createdAt: res?.comment?.createdAt,
            post: res?.comment?.post?._id,
            user: res?.user,
            _id: res?.comment?._id
          }
          this.postComments.unshift(newComment)
        }
      }, err => {
        this.router.navigate(["/error"])
      }
    )
    this.commentService.listen("reaction").subscribe(
      (res:any) => {
        this.getPostsAfterEdit()
      },
      err => { this.router.navigate(["/error"])}
    )
    // end listen to users comments to push the comment in the comments array
    

  }


  openModal(template: TemplateRef<any>) {
    this.imgUrl = null
    this.postImage = null
    this.modalRef = this.modalService.show(template);
  }
  openEditPostModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.postImage = ''
    if (this.editTextOrImgPost == 'text') {
      this.editContentForm = this.fb.group({
        content: [`${this.chosenPostToEdit.content}`, [Validators.required, emptyContent]]
      })
    } else if (this.editTextOrImgPost == 'image') {
      this.editImgForm = this.fb.group({
        image: ['', Validators.required]
      })
    }
  }
  scrollTop() { window.scroll(0, 0) }
  // start make img appear once user chose it
  selectPostImg(event: any) {
    this.postImage = event.target.files[0]

    let reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result;
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(this.postImage);
    } else {
      this.imgUrl = null
      this.postImage = null
    }
  }
  // end make img appear once user chose it
  // start clear the input file if user click cancel
  deletePostImg(input: any) {
    input.value = ''
    this.imgUrl = null
    this.postImage = null
  }
  // end clear the input file if user click cancel
  deletePostt(id: any, btn: any): any {
    this.rendrer.setAttribute(btn, 'disabled', 'disabled')
    this.deletePostLoading = true
    this.subscriptions.push(
      this.userProfilesService.deletPost(id).subscribe(
        res => {
          this.openSnackBar('post Deleted Successfully', 'Deleted')
          this.modalRef.hide()
          this.deletePostLoading = false
          this.getPostsAfterEdit()
          this.getPhotosAfterAddPost()
        }, err => {
          this.deletePostLoading = false
        }
      )
    )
  }
  openSnackBar(one: any, two: any) {
    this._snackBar.open(one, two, {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 3000
    });
  }

  editpostContent(value: any) {

    this.postLoading = true
    this.subscriptions.push(
      this.userProfilesService.updatePostContent(this.chosenPostToEdit?._id, value).subscribe(
        res => {
          this.openSnackBar('post Updated Successfully', 'Updated')
          this.postImage = ''
          this.modalRef.hide()
          this.postLoading = false
          this.postCommentsIndex = -1
          this.getPostsAfterEdit()
        }, err => {
          this.postImage = ''
          this.modalRef.hide()
          this.postLoading = false
        }
      )
    )
  }
  editpostIMG() {
    if (this.postImage) {
      this.postLoading = true
      let img = new FormData()
      if (this.postImage) img.append('image', this.postImage)
      this.subscriptions.push(
        this.userProfilesService.updatePostImage(this.chosenPostToEdit?._id, img).subscribe(
          res => {
            this.openSnackBar('The Image Updated Successfully', 'Updated')
            this.postImage = ''
            this.modalRef.hide()
            this.postLoading = false
            this.postCommentsIndex = -1
            this.getPostsAfterEdit()
            this.getPhotosAfterAddPost()
          }, err => {
            this.postImage = ''
            this.modalRef.hide()
            this.postLoading = false
          }
        )
      )
    } else {
      this.modalRef.hide()
    }
  }

  // start swiper carousel options

  reactionSwiper: any = {
    slidesPerView: "2.6",
    spaceBetween: "50",
    pagination: "{ clickable: true ,type: 'fraction'}",
    navigation: "false",
    
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    }

  }
  // end swiper carousel options
  getPostsAfterEdit() {
    this.subscriptions.push(
      this.userProfilesService.getMyProfile().subscribe(
        (res:any) => {
          this.userProfilesService.userPosts = res?.posts
        },
        err => {
        }

      )
    )
  }
  getPhotosAfterAddPost() {
    this.subscriptions.push(
      this.userProfilesService.getMyPhotos().subscribe(
        (res: any) => {
          this.userProfilesService.skeltonLoadingForPhotos = false
          this.userProfilesService.photos = res
        },
        err => { }
      )
    )
  }
 

  makeAComment(event: any, input: any, positId: any,i:any) {
    event.preventDefault()
    if (input.value.trim() != "" && this.userProfilesService.userProfile?._id) {
      this.commentService.emit("addComment", {
        postId: positId,
        userId: this.userProfilesService.userProfile?._id,
        comment: input.value.trim()
      }).then(
        res => {
          this.userProfilesService.userPosts[i].numOfComments+=1
          input.value = ''
          input.style.height = 'auto'
          input.style.height = input.scrollHeight + 'px'
        },
        err => { this.router.navigate(["/error"]) }
      )

    }
  }
 
scrollY:any
 getPostComments(id: any, i: any) {
     this.scrollY = window.scrollY
    this.commentsLoading = true
    this.postComments = []
    this.postCommentsIndex = i
    this.subscriptions.push(
      this.userProfilesService.getPostComment(id).subscribe(
        (res: any) => {
          this.commentsLoading = false
          if(!this.userProfilesService.popUP) {
            this.cd.detectChanges()
            this.addCommentInput.nativeElement.focus()
          }
          this.popupReactions=res
       
          this.postComments = res?.comments
          this.popupPost=res?.post
        }, err => {
        }
      )
    )
  }
  openReactionModal(id:any,modal:any,i:any) {
    this.postReactions=[]
    this.sortReaction=[]
    let userPost = this.userProfilesService?.userPosts[i]
    this.subscriptions.push(
      this.userProfilesService.getPostComment(id).subscribe(
        (res: any) => {
          userPost.angry= res?.numOfAngrys
          userPost.sad= res?.numOfSads
          userPost.haha= res?.numOfHahas
          userPost.wow= res?.numOfWows
          userPost.like= res?.numOfLikes
          userPost.love= res?.numOfLoves
          userPost.numOfReactions=  res?.numOfReactions
          this.postReactions = res?.reactions
          let containerOfReactions = [
            res?.numOfLoves,
            res?.numOfHahas,
            res?.numOfWows,
            res?.numOfSads,
            res?.numOfLikes,
            res?.numOfAngrys
          ]
          let imgOfReaction = [
            "love",
            "haha",
            "wow",
            "sad",
            "like",
            "angry"
          ]
          for (let i = 0; i< 6;i++) {
          let  max = Math.max(...containerOfReactions)
            this.sortReaction.push({length:max,reactionImg:imgOfReaction[containerOfReactions.indexOf(max)]})
            imgOfReaction.splice(containerOfReactions.indexOf(max),1)
            containerOfReactions.splice(containerOfReactions.indexOf(max),1)
          }
          this.openModal(modal)

        }, err => {
        }
      )
    )
  }
  deleteComment(commentId: any, postId: any, i: any) {
    this.subscriptions.push(
      this.userProfilesService.deletComment(commentId).subscribe(
        res => {
          this.userProfilesService.userPosts[i].numOfComments-=1
          this.getPostComments(postId, i)
        }, err => { })
    )
  }
  updateComment(id:any,comment:any,postId:any,i:any,e:any) {
    e.preventDefault()
    if(comment.trim() !== '') {
      let updatedComment = {id,comment}
          this.subscriptions.push(
      this.userProfilesService.updateComment(updatedComment).subscribe(
        res => {
          this.getPostComments(postId, i)
          this.editCommentIndex=-1
        }, err => {  })
    )
    }
  }
  // start make user control on textarea height
  textAreaHeightAuto(textArea: any) {
    textArea.style.height = '34px'
    textArea.style.height = textArea.scrollHeight + 'px'
  }
  // end make user control on textarea height

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }
  resizeTextArea() {
    this.cd.detectChanges()
    let textarea =  this.editCommentInpu.nativeElement
    textarea.focus()
    textarea.selectionStart = textarea.value.length
    this.rendrer.setStyle(textarea, "height", `${textarea.scrollHeight}px`)
  }
  showCommentsInMobileScreen(element:any) {
    this.rendrer.removeClass(element,"zIndex")
  }
  hideCommentsInMobileScreen(element:any) {
    this.rendrer.addClass(element,"zIndex")
  }
  closePopup() {
    this.userProfilesService.popUP=false;
    setTimeout(() => window.scrollTo(0, this.scrollY), 0);
    this.postComments = [];
    this.popupPost=[];
    this.postReactions=[]
    this.postCommentsIndex=-1;
  }
  navigate(id:any) {
    this.closePopup()
    this.router.navigate(['/visit',id])
  }
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(this.userProfilesService.popUP) {
       this. closePopup()
    }
  }

  makeReaction(reactionName:any,i:any,parentOfReactions:any,postId:any) {
    let userPost = this.userProfilesService?.userPosts[i] 
    this.rendrer.addClass(parentOfReactions, "hideParentOfReactions") 
    if(userPost?.myReaction?.length) {
      if (reactionName==userPost?.myReaction[0]?.reaction) {
         userPost.myReaction=[]
      } else {
        userPost.myReaction=[]
        userPost?.myReaction.push({reaction:reactionName})
      }
    } else  {
      userPost.myReaction = []
      userPost.myReaction.push({reaction:reactionName})
    }
      this.commentService.emit("addReaction",{
      postId:postId,
      reaction:reactionName
    }).then(
      res => {
        this. updateReaction(postId,i)
      }, err => { this.router.navigate(["/error"])}
    )
  }
  updateReaction(postId:any,i:any) {
    let userPost = this.userProfilesService?.userPosts[i]
    this.userProfilesService.getPostComment(postId).subscribe(
      (res: any) => {
        userPost.angry= res?.numOfAngrys
        userPost.sad= res?.numOfSads
        userPost.haha= res?.numOfHahas
        userPost.wow= res?.numOfWows
        userPost.like= res?.numOfLikes
        userPost.love= res?.numOfLoves
        userPost.numOfReactions=  res?.numOfReactions
      
      }, err => {
      }
    )
  }
  showParentOfReactionsOnHover(element:any) {
    this.rendrer.removeClass(element, "hideParentOfReactions")
  }
  hideParentOfReactionsOnHover(element:any) {
    this.rendrer.addClass(element, "hideParentOfReactions")
  }
  
  
}
