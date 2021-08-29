import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { FollowOrUnfollowService } from 'src/app/services/follow-or-unfollow.service';
import { PeopleYouMayKnowService } from 'src/app/services/people-you-may-know.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-suggested-users',
  templateUrl: './suggested-users.component.html',
  styleUrls: ['./suggested-users.component.scss']
})
export class SuggestedUsersComponent implements OnInit , OnDestroy {
users:any=[]
loading:any=true
loadingItems:any=[]
followLoading:any=false
subscriptions :any[] = [];
  constructor(private peopleYouMayKnowService:PeopleYouMayKnowService,
    private folloOrUnfollowService:FollowOrUnfollowService,
    private _snackBar: MatSnackBar,
    public userService:UserProfileService,
    private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Friends | Fakebook")
    window.scroll(0,0)
 
    this.loadingItems.length=8
    this.getSuggested()
  }
  // start follow users method
  followOrUnFollow(id:any) {
    this.followLoading=true
    this.loading=true
     this.subscriptions.push(
      this.folloOrUnfollowService.followOrUnFollow(id).subscribe(
        res => {
          this._snackBar.open( "Followed up successfully",  "successfully", {
            horizontalPosition: 'left',
            verticalPosition: 'bottom',
            duration: 3000
          });
          this.getSuggested()
        },
        err =>{}
      )
     )
  }
    // end follow users method
  getSuggested() {
    this.subscriptions.push(
      this.peopleYouMayKnowService.getAllPeopleYouMAyKnow().subscribe(
        res => {
          this.users=res
          this.loading=false
         this.followLoading=false
        },
        err => {
        }
      )
    )
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
 }
}
