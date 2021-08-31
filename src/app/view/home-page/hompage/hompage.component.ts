import { 
   ChangeDetectorRef,
   Component, 
   ElementRef, 
   HostListener, 
   OnDestroy, 
   OnInit, 
   Renderer2, 
   TemplateRef, 
   ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { io } from 'socket.io-client';
import { AuthService } from 'src/app/services/auth.service';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { environment } from 'src/environments/environment';
import SwiperCore, { Navigation } from 'swiper/core';
SwiperCore.use([Navigation,]);
@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.scss']
})
export class HompageComponent implements OnInit,OnDestroy {

  
  profileOnHover: any = -1
  seeMoreIndex: any = -1
  swiperLoadingCount = []
  postComments: any = []
  postCommentsIndex: any = -1
  commentsLoading: boolean = true
  modalRef: BsModalRef;
  subscriptions :any[] = [];
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
  socket:any
  constructor(public userProfileService: UserProfileService,
    private cd: ChangeDetectorRef,
    private commentService: CommentSocketService,
    public userProfilesService: UserProfileService,
    private modalService: BsModalService,
    private title:Title,
    private  rendrer:Renderer2,
    private router:Router,
    private auth:AuthService
    ) {
     
     }

  ngOnInit(): void {
    this.socket = io(`${environment.apiUrl}`,
    {query:{token:`${localStorage.getItem('fakebookToken')}`}})
    this.title.setTitle("Fakebook")
    window.scroll(0,0)
    this.swiperLoadingCount.length=5
    // start listen to users comments to push the comment in the comments array
    this.commentService.listen("comment").subscribe(
      (res: any) => {
        this.getMyFollowingPosts()
        if (this.postCommentsIndex != -1 &&
           this.userProfileService.myFollowingPosts[this.postCommentsIndex]?._id == res?.comment?.post?._id) {
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
        this.getMyFollowingPosts()
      },
      err => { this.router.navigate(["/error"])}
    )
    // end listen to users comments to push the comment in the comments array
    this.getMyFollowingPosts()
   
  }
  getMyFollowingPosts() {
     this.subscriptions.push(
      this.userProfileService.getMyFollowingPosts().subscribe(
        res => {
          this.userProfileService.myFollowingPosts = res
          this.userProfileService.HomePageSkeltonLoading = false
        }, err => {
        }
      )
     )
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

  makeAComment(event: any, input: any, positId: any,i:any) {
    event.preventDefault()
    if (input.value.trim() != '' && this.userProfilesService.userProfile?._id) {
      this.commentService.emit("addComment", {
        postId: positId,
        userId: this.userProfilesService.userProfile?._id,
        comment: input.value.trim()
      }).then(
        res => {
           this.userProfilesService.myFollowingPosts[i].numOfComments+=1
          input.value = ''
          input.style.height = 'auto'
          input.style.height = input.scrollHeight + 'px'
        },
        err => { this.router.navigate(["/error"])}
      )
    } 

  }
  scrollY:any
  track(index: number) {
    return index
  }
  getPostComments(id: any, i: any) {
    this.scrollY=window.scrollY
    this.commentsLoading = true
    this.postComments = []
    this.postCommentsIndex = i
    this.subscriptions.push(
      this.userProfilesService.getPostComment(id).subscribe(
        (res: any) => {
          this.commentsLoading = false
          if(!this.userProfileService.popUP) {
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

    this.subscriptions.push(
      this.userProfilesService.getPostComment(id).subscribe(
        (res: any) => {
          let userPost = this.userProfileService.myFollowingPosts[i]
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
          this.getPostComments(postId, i)
          this.userProfilesService.myFollowingPosts[i].numOfComments-=1
        }, err => {  })
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
  resizeTextArea() {
    this.cd.detectChanges()
    let textarea =  this.editCommentInpu.nativeElement
    textarea.focus()
    textarea.selectionStart = textarea.value.length
    this.rendrer.setStyle(textarea, "height", `${textarea.scrollHeight}px`)
  }
  // start make user control on textarea height
  textAreaHeightAuto(textArea: any) {
    textArea.style.height = '34px'
    textArea.style.height = textArea.scrollHeight + 'px'
  }
    // end make user control on textarea height
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }



     ngOnDestroy() {
      this.subscriptions.forEach(sub => {
        sub.unsubscribe()
      })
   }
   showCommentsInMobileScreen(element:any) {
    this.rendrer.removeClass(element,"zIndex")
  }
  hideCommentsInMobileScreen(element:any) {
    this.rendrer.addClass(element,"zIndex")
  }
  closePopup() {
    this.userProfileService.popUP=false;
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
    if(this.userProfileService.popUP) {
       this. closePopup()
    }
}
makeReaction(reactionName:any,i:any,parentOfReactions:any,postId:any) {
  let userPost = this.userProfileService.myFollowingPosts[i]
  this.rendrer.addClass(parentOfReactions, "hideParentOfReactions")
  if(userPost?.myReaction?.length) {
   
    if (reactionName==userPost?.myReaction[0]?.reaction) {
       userPost.myReaction=[]
    } else {
      userPost.myReaction=[]
      userPost.myReaction.push({reaction:reactionName})
      
    }
  }  else  {
    userPost.myReaction = []
    userPost.myReaction.push({reaction:reactionName})
  }
  this.commentService.emit("addReaction",{
    postId:postId,
    reaction:reactionName
  }).then(
    res => {
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
          this.router.navigate(["/error"])
        }
      )
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

