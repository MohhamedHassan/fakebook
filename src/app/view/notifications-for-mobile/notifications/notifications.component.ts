import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  constructor(public userProfilesService:UserProfileService,
    private commentService:CommentSocketService,
    private router:Router,
    private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Notifications")
    this.getMyNotifications(
    )
  }
  getMyNotifications() {
    this.subscription = this.userProfilesService.getMyNotifications().subscribe(
      (res:any) => {
        this.userProfilesService.myNotifications=res?.newNotification
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
          this.getMyNotifications()
      } , err => {
        this.router.navigate(["/error"])
      }
    )
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe()
  }
}
