import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommentSocketService } from 'src/app/services/comment-socket.service';
import { FollowOrUnfollowService } from 'src/app/services/follow-or-unfollow.service';
import { PeopleYouMayKnowService } from 'src/app/services/people-you-may-know.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import SwiperCore, { Navigation, Swiper } from 'swiper/core';
SwiperCore.use([Navigation,]);
@Component({
  selector: 'app-you-may-know',
  templateUrl: './you-may-know.component.html',
  styleUrls: ['./you-may-know.component.scss']
})
export class YouMayKnowComponent implements OnInit,OnDestroy {
  skip: any = 0
  suggestedFriends: any = []
  peopleYouMayKnowLoading: boolean = true
  followLoading:any=false
  swiperLoadingCount:any=[]
  subscriptions:any[]=[]
  @ViewChild('updtaeSwiper') updtaeSwiper: { swiperRef: Swiper };
  constructor( private peopleYouMayKnow: PeopleYouMayKnowService,
    public userProfileService:UserProfileService,
    private cd: ChangeDetectorRef,
    private _ngZone: NgZone,
    private router:Router,
    private folloOrUnfollowService:FollowOrUnfollowService,
    private _snackBar: MatSnackBar,
    private socketService:CommentSocketService) { }

  ngOnInit(): void {
    this.swiperLoadingCount.length=5
    this.subscriptions.push(
      this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe(
          res => {
            this.suggestedFriends = res
            this.peopleYouMayKnowLoading = false
          },
          err => {
          }
        )
        )
  }
// start fetch more suggested on click on swiper arrow
fetchMoreSuggestedFriends() {

  this.skip += 10
  this.subscriptions.push(
    this.peopleYouMayKnow.peopleYouMAyKnow(this.skip).subscribe(
      (res: any) => {
        this.suggestedFriends.push(...res)
        this.cd.detectChanges()
        this.updtaeSwiper.swiperRef.update()
      },
      err => {}
    )
  )

}
// end fetch more suggested on click on swiper arrow
// start navigate from swiper carousel to another component 
navigatee(id: any) {
  this._ngZone.run(() => {
    this.router.navigate(['/visit', id])
  });
}
// end navigate from swiper carousel to another component 
    // statr follow users method
    followOrUnFollow(id:any) {
      this.followLoading=true
      this.peopleYouMayKnowLoading=true
    this.subscriptions.push(
      this.folloOrUnfollowService.followOrUnFollow(id).subscribe(
        res => {
        this.subscriptions.push(
          this.peopleYouMayKnow.peopleYouMAyKnow(0).subscribe(
            res => {
              this.socketService.emit("follow",{id}).then(
                res => {
                  this.suggestedFriends=res
                  this.peopleYouMayKnowLoading=false
                  this.followLoading=false
                  this.getMyFollowingPosts()
                  this._snackBar.open( "Followed up successfully",  "successfully", {
                   horizontalPosition: 'left',
                   verticalPosition: 'bottom',
                   duration: 3000
                 });
                } , err => {this.router.navigate(["/error"])}
              )
            },
            err => {
            }
          )
        )
        },
        err => {}
      )
    )
    }
     // end follow users method
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
   swiperConfig: any = {
    slidesPerView: "2.6",
    spaceBetween: "50",
    pagination: "{ clickable: true ,type: 'fraction'}",
    navigation: "true",
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }

  }
ngOnDestroy() {
  this.subscriptions.forEach(sub => {
    sub.unsubscribe()
  })
}
}
