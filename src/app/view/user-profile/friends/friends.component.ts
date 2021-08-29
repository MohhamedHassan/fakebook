import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
profileOnHover:number=-1
followersOnHover:number=-1
searchPipeValue:any
searchPipeValueTwo:any
loadingCount:any=[]
  constructor(public userprofileService:UserProfileService) { this.loadingCount.length=4 }

  ngOnInit(): void {
    window.scroll(0,0)
  }
  

}
