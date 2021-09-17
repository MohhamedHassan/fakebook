import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
translatedSnacBarTextOne:any
translatedSnacBarTextTwo:any
  constructor(private peopleYouMayKnowService:PeopleYouMayKnowService,
    private folloOrUnfollowService:FollowOrUnfollowService,
    private _snackBar: MatSnackBar,
    public userService:UserProfileService,
    private title:Title,
    private socketService:CommentSocketService,
    private router:Router,
    private translate:TranslateService) {
      this.subscriptions.push( this.translate.get('youMayKnow.friends').subscribe(res => {
        this.title.setTitle(`${res} | Fakebook`)
     }))
      this.subscriptions.push( this.translate.get('youMayKnow.snackBarOne').subscribe(res => {
        this.translatedSnacBarTextOne=res
     }))
     this.subscriptions.push(
      this.translate.get('youMayKnow.snackBarTwo').subscribe(res => {
        this.translatedSnacBarTextTwo=res
     }))
     }

  ngOnInit(): void {
  
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
           this.socketService.emit("follow",{id}).then(
             res => {
              this._snackBar.open( this.translatedSnacBarTextOne,  this.translatedSnacBarTextTwo, {
                horizontalPosition: 'left',
                verticalPosition: 'bottom',
                duration: 3000
              });
              this.getSuggested()
             } , err => {this.router.navigate(["/error"])}
           )
      
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
           console.log(res)
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
