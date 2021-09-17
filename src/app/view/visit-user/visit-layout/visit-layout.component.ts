import { Component, DoCheck, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { FollowOrUnfollowService } from 'src/app/services/follow-or-unfollow.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-layout',
  templateUrl: './visit-layout.component.html',
  styleUrls: ['./visit-layout.component.scss']
})
export class VisitLayoutComponent implements OnInit,OnDestroy {


  profileOnHoverforFollowers: number = -1
  userId:any
  followingStatus:any
  followLoading:any=false
  subscriptions :any[] = [];
  constructor(private activatedroute: ActivatedRoute,
    public visituser: VisitUserService,
     private rendrer:Renderer2,
      private folloOrUnfollowService:FollowOrUnfollowService,
      private title:Title,
      public userProfilesService:UserProfileService,
      private router:Router,
      private commentService:CommentSocketService
    ) { }
    get lang() {return localStorage.getItem("currenLanguage") || 'en'}
  ngOnInit(): void {
  
   this.subscriptions.push(
    this.activatedroute.params.subscribe(param => {
      this.visituser.userId=param.id
      this.subscriptions.push(
        this.visituser.getuserProfile(param.id).subscribe(
          (res: any) => {
            this.userId=param.id
            this.followingStatus=res?.follow
            this.visituser.userProfile = res?.user
            this.title.setTitle(`${this.visituser.userProfile?.firstName.slice(0,1).toUpperCase()}${this.visituser.userProfile?.firstName.slice(1)} 
            ${this.visituser.userProfile?.lastName.slice(0,1).toUpperCase()}${this.visituser.userProfile?.lastName.slice(1)}`)
            this.visituser.userPosts = res?.posts
            this.visituser.skeltonLoading=false
            this.visituser.userProfileLoading=false
            this.visituser.darkMode=res?.darkMode
            window.scroll(0,0)
          },
          err => {}
        )
      )
     this.subscriptions.push(
      this.visituser.getUserFollowers(param.id).subscribe(
        (res: any) => {
          this.visituser.followers = res?.followers
          this.visituser.skeltonLoadingFollowers=false
        },
        err => {}
      )
     )
      this.subscriptions.push(
        this.visituser.getUserFollowing(param.id).subscribe(
          (res: any) => {
            this.visituser.following = res?.following
            this.visituser.friendsSkeltonLoading=false
          },
          err => {}
        )
      )
     this.subscriptions.push(
      this.visituser.getUserPhotos(param.id).subscribe(
        (res: any) => {
          this.visituser.photos = res
          this.visituser.skeltonLoadingPhotos=false
        },
        err => {}
      )
     )
    
    })
   )
 this.subscriptions.push(
  this.userProfilesService.getMyNotifications().subscribe(
    (res:any) => {
      this.userProfilesService.myNotifications=res?.newNotification
      console.log(this.userProfilesService.myNotifications)
    },
    err => {}
  )
 )
  
  }
  profilePhotoss(img:any) {
    if( this.visituser.userProfile?.profilePhoto) {
      this.rendrer.setStyle(img,"borderWidth","6px")
      setTimeout(() => {
           this.rendrer.setStyle(img,"borderWidth","3px")
      }, 100);
      setTimeout(() => {
        this.router.navigate([`../visit/${this.userId}/profilePhotos`])
   }, 140);
     
    }
  }
followOrUnFollow(id:any) {
  this.followLoading=true
  this.subscriptions.push(
    this.folloOrUnfollowService.followOrUnFollow(id).subscribe(
      res => {
        if(!this.followingStatus) {
          this.commentService.emit("follow",{
            id
          }).then (
            res => {},
            err => {this.router.navigate(["/error"])}
          )
        }
      
        this.followingStatus=!this.followingStatus
        this.subscriptions.push(
         this.visituser.getUserFollowers(this.userId).subscribe(
           (res: any) => {
             this.followLoading=false
             this.visituser.followers = res?.followers
             this.visituser.skeltonLoadingFollowers=false
           },
           err => {}
         )
        )
      },
      err => {}
    )
  )
}
ngOnDestroy() {
  this.visituser.userProfile =null
  this.subscriptions.forEach(sub => {
    sub.unsubscribe()
  })
}

}