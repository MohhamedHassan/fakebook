import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-userprofile-photos',
  templateUrl: './userprofile-photos.component.html',
  styleUrls: ['./userprofile-photos.component.scss']
})
export class UserprofilePhotosComponent implements OnInit {

  constructor(public userProfilesService:UserProfileService) { }

  ngOnInit(): void {
  }

}
