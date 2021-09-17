import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-userprofile-followers',
  templateUrl: './userprofile-followers.component.html',
  styleUrls: ['./userprofile-followers.component.scss']
})
export class UserprofileFollowersComponent implements OnInit {

  profileOnHoverforFollowers = -1
  constructor(public userProfilesService:UserProfileService) { }
get lang() {return localStorage.getItem("currenLanguage") || "en"}
  ngOnInit(): void {
  }

}
