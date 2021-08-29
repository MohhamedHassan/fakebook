import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-userprofile-following',
  templateUrl: './userprofile-following.component.html',
  styleUrls: ['./userprofile-following.component.scss']
})
export class UserprofileFollowingComponent implements OnInit {
  profileOnHoverforFollowing = -1
  constructor(public userProfilesService:UserProfileService) { }

  ngOnInit(): void {
  }

}
