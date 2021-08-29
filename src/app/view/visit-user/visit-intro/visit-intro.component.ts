import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-intro',
  templateUrl: './visit-intro.component.html',
  styleUrls: ['./visit-intro.component.scss']
})
export class VisitIntroComponent implements OnInit {

  constructor(public visitUserService:VisitUserService,
    public userProfilesService:UserProfileService
    ) { }

  ngOnInit(): void {
  }

}
