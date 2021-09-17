import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-followers',
  templateUrl: './visit-followers.component.html',
  styleUrls: ['./visit-followers.component.scss']
})
export class VisitFollowersComponent implements OnInit {
  profileOnHoverforFollowers:number=-1
  constructor(public visitUserService:VisitUserService,
    public userProfilesService:UserProfileService) { }
get lang() {return localStorage.getItem("currenLanguage") || 'en'}
  ngOnInit(): void {
  }
  scrollTop() {}

}
