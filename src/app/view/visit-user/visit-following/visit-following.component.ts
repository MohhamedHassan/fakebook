import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-following',
  templateUrl: './visit-following.component.html',
  styleUrls: ['./visit-following.component.scss']
})
export class VisitFollowingComponent implements OnInit {
  profileOnHoverforFollowing:number=-1
  constructor(public visitUserService:VisitUserService,
    public userProfilesService:UserProfileService) { }
    get lang() {return localStorage.getItem("currenLanguage") || 'en'}
  ngOnInit(): void {
  }
  scrollTop() {}
}
