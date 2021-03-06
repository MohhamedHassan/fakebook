import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { FollowOrUnfollowService } from 'src/app/services/follow-or-unfollow.service';
import { PeopleYouMayKnowService } from 'src/app/services/people-you-may-know.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';
import SwiperCore, { Navigation, Swiper  } from 'swiper/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
SwiperCore.use([Navigation, ]);
@Component({
  selector: 'app-visit-profile',
  templateUrl: './visit-profile.component.html',
  styleUrls: ['./visit-profile.component.scss']
})
export class VisitProfileComponent implements OnInit,OnDestroy {
  profileOnHover:number=-1
  seeMoreIndex:number=-1
  swiperLoadingCount:any=[]
  postComments: any = []
  postCommentsIndex: any = -1
  commentsLoading: boolean = true
  followLoading:any=false
  subscriptions :any[] = [];
  editCommentIndex: any = -1
  enterESCtoCancel:boolean=true
  popupReactions:any
  popupPost:any
  reactions:any 
  postReactions:any=[]
  sortReaction:any = []
  reactionModalImgSrc:any=""
  filterReactions:any=''
  reacionsModaClassIndex:any=-1
  modalRef: BsModalRef
  @ViewChild('updtaeSwiper') updtaeSwiper: { swiperRef: Swiper };
  @ViewChild('editCommentInpu', { static: false }) editCommentInpu: ElementRef
  @ViewChild('addCommentInput', { static: false }) addCommentInput: ElementRef
  translatedSnacBarTextOne:any
translatedSnacBarTextTwo:any
  constructor(public visitUserService: VisitUserService,
    public peopleYouMayKnow:PeopleYouMayKnowService,
    public userProfilesService:UserProfileService,
    private commentService:CommentSocketService,
    private folloOrUnfollowService:FollowOrUnfollowService,
    private cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private rendrer:Renderer2,
    private modalService: BsModalService,
    private router:Router,
    private translate:TranslateService) {
      this.subscriptions.push(
        translate.get('posts.reactions').subscribe(
          res => this.reactions = res
       )

       )
       this.subscriptions.push( this.translate.get('youMayKnow.snackBarOne').subscribe(res => {
        this.translatedSnacBarTextOne=res
     }))
     this.subscriptions.push(
      this.translate.get('youMayKnow.snackBarTwo').subscribe(res => {
        this.translatedSnacBarTextTwo=res
     }))
     }
     get lang() {return localStorage.getItem("currenLanguage") || 'en'}
  ngOnInit(): void {
  
    this.scrollTop()
    this.swiperLoadingCount.length = 5
    this.commentService.listen("comment").subscribe(
      (res: any) => {
        this.updatePosts()
        if (this.postCommentsIndex != -1 &&
           this.visitUserService.userPosts[this.postCommentsIndex]?._id == res?.comment?.post?._id) {
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
          this.updatePosts()
      },
      err => { this.router.navigate(["/error"])}
    )
  }

  updatePosts() {
    this.subscriptions.push(
      this.visitUserService.getuserProfile(this.visitUserService.userId).subscribe(
        (res:any) => { this.visitUserService.userPosts = res?.posts},
        err => {}
      )
    )
  }
  scrollTop() {window.scroll(0,0)}
 

  makeAComment(event: any, input: any, positId: any,i:any) {
    event.preventDefault()
    if (input.value.trim() != '' && this.userProfilesService.userProfile?._id) {
      this.commentService.emit("addComment", {
        postId: positId,
        userId: this.userProfilesService.userProfile?._id,
        comment: input.value.trim()
      }).then(
        res => {
          this.visitUserService.userPosts[i].numOfComments+=1
          input.value = ''
          input.style.height = 'auto'
          input.style.height = input.scrollHeight + 'px'
        },
        err => { this.router.navigate(["/error"])}
      )
    } 

  }
  scrollY:any
  getPostComments(id: any, i: any) {
    this.scrollY=window.scrollY
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
    this.subscriptions.push(
      this.userProfilesService.getPostComment(id).subscribe(
        (res: any) => {
          this.updatePosts()
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
          this.visitUserService.userPosts[i].numOfComments-=1
          this.getPostComments(postId, i)
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
  textAreaHeightAuto(textArea: any) {
    textArea.style.height = '34px'
    textArea.style.height = textArea.scrollHeight + 'px'
  }
  followOrUnFollow(id:any) {
    this.followLoading=true
    this.subscriptions.push(
      this.folloOrUnfollowService.followOrUnFollow(id).subscribe(
        res => {
          this.commentService.emit("follow",{
            id
          }).then(
            res => {
              this.subscriptions.push(
                this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe(
                  res => {
                   this.followLoading=false
                   this._snackBar.open(  this.translatedSnacBarTextOne,  this.translatedSnacBarTextTwo, {
                    horizontalPosition: 'left',
                    verticalPosition: 'bottom',
                    duration: 3000
                  });
                  },
                  err => {
                  }
                )
               )
            } , err => {
              this.router.navigate(["/error"])
            }
          )
      
        },
        err => {}
      )
    )
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
  let userPost = this.visitUserService.userPosts[i]
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
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template)
}
}
