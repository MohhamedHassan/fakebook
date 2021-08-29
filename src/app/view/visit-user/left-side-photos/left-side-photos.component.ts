import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-left-side-photos',
  templateUrl: './left-side-photos.component.html',
  styleUrls: ['./left-side-photos.component.scss']
})
export class LeftSidePhotosComponent implements OnInit {

  constructor(public visitUserService:VisitUserService,
    public userProfilesService:UserProfileService
    ) { }

  ngOnInit(): void {
  }

}
