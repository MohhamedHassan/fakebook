import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit , OnDestroy {
  subscription:Subscription
  translationSub:Subscription
  constructor(public userProfilesService:UserProfileService,
    private commentService:CommentSocketService,
    private router:Router,
    private title:Title,
    private translate:TranslateService) { }
    get lang() {return localStorage.getItem("currenLanguage") || "en"}
  ngOnInit(): void {
    window.scroll(0,0)
    this.translationSub = this.translate.get('youMayKnow.snackBarTwo').subscribe(res => {
        this.title.setTitle(res)
     })
    this.getMyNotifications()
  }
  getMyNotifications() {
    this.subscription = this.userProfilesService.getMyNotifications().subscribe(
      (res:any) => {
        this.userProfilesService.myNotifications=res?.newNotification
        console.log(this.userProfilesService.myNotifications)
      },
      err => {}
    )
  }
  openNotification(id:any,postId:any) {
    let audio = new Audio()
    audio.src = "assets/Facebook Louder.mp3";
    audio.load();
    audio.play();
    this.commentService.emit("opened",{
       id:id
    }).then(
      res => {
          this.router.navigate(["/postDetails",postId])
      } , err => {
        this.router.navigate(["/error"])
      }
    )
  
  }
  openFollowNotification(userId:any,id:any) {
    this.commentService.emit("opened",{
     id
   }).then(
     res => {
         this.router.navigate(["/visit",userId])
         this.commentService.showFollowNotification=false
         this.getMyNotifications()
     } , err => {
       this.router.navigate(["/error"])
     }
   )
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe()
    if (this.translationSub) this.translationSub.unsubscribe()
  }
}
