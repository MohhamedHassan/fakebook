import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
postDetails:any
postComments:any
i:any=0
seeMoreIndex:any=-1
commentsLoading:any=true
profileOnHoverMain:any=false
profileOnHoverForComments:any=-1
profileOnHoverForCommentsIMG:any=-1
skeltonLoading:any=true
user:any
subscriptions :any[] = [];
editCommentIndex: any = -1
enterESCtoCancel:boolean=true
postId:any
reactionPipe:any
@ViewChild('editCommentInpu', { static: false }) editCommentInpu: ElementRef
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
modalRef: BsModalRef
  constructor(
    private activatedroute:ActivatedRoute,
    public userService:UserProfileService,
    private commentService:CommentSocketService,
    private rendrer:Renderer2,
    private cd:ChangeDetectorRef,
    public modalService: BsModalService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
  
        this.userService.getMyNotifications().subscribe(
          (res:any) => {
            this.userService.myNotifications=res?.newNotification
          },
          err => {}
        )
    )
    window.scroll(0,0)
   // start listen to users comments to push the comment in the comments array
   this.commentService.listen("comment").subscribe(
    (res: any) => {
      if (this.postDetails?._id == res?.comment?.post?._id) {
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
      this.updateReacts()
    },
    err => { this.router.navigate(["/error"])}
  )
    // end listen to users comments to push the comment in the comments array
    // start get the post id to get the conetent and comments of it
    this.subscriptions.push(
      this.activatedroute.params.subscribe(param => {
        this.postId=param?.id
       this.getPostComments(this.postId)
      })
    )
   
  }
  getPostComments(id:any) {
    this.commentsLoading=true
    this.subscriptions.push(
      this.userService.getPostComment(id).subscribe(
        (res:any) => {
          this.postDetails=res?.post
          this.postComments=res?.comments
          this.reactionPipe=res
          this.skeltonLoading=false
          this.commentsLoading=false
        } , err => {
          this.commentsLoading=false
        }
      )
     )
  }
  openReactionModal(modal:any) {
    this.postReactions=[]
    this.sortReaction=[]
    this.subscriptions.push(
      this.userService.getPostComment(this.postId).subscribe(
        (res: any) => {
          this.reactionPipe.numOfAngrys= res?.numOfAngrys
          this.reactionPipe.numOfSads= res?.numOfSads
          this.reactionPipe.numOfHahas= res?.numOfHahas
          this.reactionPipe.numOfWows= res?.numOfWows
          this.reactionPipe.numOfLikes= res?.numOfLikes
          this.reactionPipe.numOfLoves= res?.numOfLoves
          this.reactionPipe.numOfReactions=  res?.numOfReactions
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
  makeAComment(event:any,input:any,positId:any) {
    event.preventDefault()
   if(input?.value.trim() != "" ) {
     this.commentService.emit("addComment",{
       postId:positId,
       userId:this.userService.userProfile?._id,
       comment:input?.value.trim()
   }).then(
     res => {
       input.value=''
       input.style.height = 'auto'
       input.style.height = input.scrollHeight + 'px'
     },
     err => { this.router.navigate(["/error"])}
   )
   
   } 
  }
  deleteComment(commentId: any, postId: any) {
    this.subscriptions.push(
      this.userService.deletComment(commentId).subscribe(
        res => {
          this.getPostComments(postId)
        }, err => {  })
    )
  }
  updateComment(id:any,comment:any,e:any) {
    e.preventDefault()
    if(comment.trim() !== '') {
      let updatedComment = {id,comment}
          this.subscriptions.push(
      this.userService.updateComment(updatedComment).subscribe(
        res => {
          this.getPostComments(this.postId)
          this.editCommentIndex=-1
        }, err => {  })
    )
    }
  }
  // start make user control on textarea height
  textAreaHeightAuto(textArea:any) {
     textArea.style.height='34px'
     textArea.style.height=textArea.scrollHeight+'px'
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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    showParentOfReactionsOnHover(element:any) {
      this.rendrer.removeClass(element, "hideParentOfReactions")
    }
    hideParentOfReactionsOnHover(element:any) {
      this.rendrer.addClass(element, "hideParentOfReactions")
    }
    makeReaction(reactionName:any,parentOfReactions:any) { 
      this.rendrer.addClass(parentOfReactions, "hideParentOfReactions") 
      if(this.reactionPipe?.myReaction?.length) {
        if (reactionName==this.reactionPipe?.myReaction[0]?.reaction) {
           this.reactionPipe.myReaction=[]
        } else {
          this.reactionPipe.myReaction=[]
          this.reactionPipe?.myReaction.push({reaction:reactionName})
        }
      } else  {
        this.reactionPipe.myReaction = []
        this.reactionPipe?.myReaction.push({reaction:reactionName})
      }
        this.commentService.emit("addReaction",{
        postId:this.postId,
        reaction:reactionName
      }).then(
        res => {
          this.updateReacts()
        } ,err => { this.router.navigate(["/error"])}
      )
    }
    updateReacts() {
      this.userService.getPostComment(this.postId).subscribe(
        (res: any) => {
          this.reactionPipe.numOfAngrys= res?.numOfAngrys
          this.reactionPipe.numOfSads= res?.numOfSads
          this.reactionPipe.numOfHahas= res?.numOfHahas
          this.reactionPipe.numOfWows= res?.numOfWows
          this.reactionPipe.numOfLikes= res?.numOfLikes
          this.reactionPipe.numOfLoves= res?.numOfLoves
          this.reactionPipe.numOfReactions=  res?.numOfReactions
        
        }, err => {
        }
      )
    }
}

