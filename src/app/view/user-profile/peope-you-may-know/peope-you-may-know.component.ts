import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FollowOrUnfollowService } from 'src/app/services/follow-or-unfollow.service';
import { PeopleYouMayKnowService } from 'src/app/services/people-you-may-know.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import SwiperCore, { Navigation, Swiper } from 'swiper/core';
SwiperCore.use([Navigation,]);
@Component({
  selector: 'app-peope-you-may-know',
  templateUrl: './peope-you-may-know.component.html',
  styleUrls: ['./peope-you-may-know.component.scss']
})
export class PeopeYouMayKnowComponent implements OnInit {
  skip: any = 0
  peopleYouMayKnowLoading: boolean = true
  followLoading: any = false
  suggestedFriends: any = []
  swiperLoadingCount: any = []
  @ViewChild('updtaeSwiper') updtaeSwiper: { swiperRef: Swiper };
  subscriptions:any[]=[]
  constructor(  private peopleYouMayKnow: PeopleYouMayKnowService,
    private cd: ChangeDetectorRef,
    public userProfilesService:UserProfileService,
    private _ngZone: NgZone,
    private router:Router,
    private folloOrUnfollowService:FollowOrUnfollowService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.swiperLoadingCount.length=5
    this.getPeopleYouMAyKnow()
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
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }

  }
  fetchMoreSuggestedFriends() {
    this.skip += 10
    this.subscriptions.push(
      this.peopleYouMayKnow.peopleYouMAyKnow(this.skip).subscribe(
        (res: any) => {
          this.suggestedFriends.push(...res)
          this.cd.detectChanges()
          this.updtaeSwiper.swiperRef.update()
        },
        err => { }
      )
    )
  }
    // start navigate from swiper carousel to another component 
    navigatee(id: any) {
      this._ngZone.run(() => {
        this.router.navigate(['/visit', id])
      });
    }
    // end navigate from swiper carousel to another component 
    getPeopleYouMAyKnow() {
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
      // statr follow users method
  followOrUnFollow(id: any) {
    this.followLoading = true
    this.peopleYouMayKnowLoading = true
    this.subscriptions.push(
      this.folloOrUnfollowService.followOrUnFollow(id).subscribe(
        res => {
          this.getPeopleYouMAyKnow()
          this.subscriptions.push(
            this.userProfilesService.getFollowing().subscribe(
              (res: any) => {
                this.userProfilesService.skeltonLoadingForFollowing = false
                this.userProfilesService.following = res?.followings?.following
                this.followLoading = false
                this.openSnackBar("Followed up successfully", "successfully")
              },
              err => { }
            )
          )
        },
        err => { }
      )
    )
  }
  // end follow users method
  openSnackBar(one: any, two: any) {
    this._snackBar.open(one, two, {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 3000
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }
}