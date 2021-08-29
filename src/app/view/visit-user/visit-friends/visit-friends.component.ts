import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-friends',
  templateUrl: './visit-friends.component.html',
  styleUrls: ['./visit-friends.component.scss']
})
export class VisitFriendsComponent implements OnInit {
  searchPipeValue:any
  searchPipeValueTwo:any
  profileOnHover:any=-1
  followersOnHover:any=-1
  loadingCount:any=[]
  constructor(public visitUserService: VisitUserService,
    public userProfilesService:UserProfileService
    ) { this.loadingCount.length=4 }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
