import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-photos',
  templateUrl: './visit-photos.component.html',
  styleUrls: ['./visit-photos.component.scss']
})
export class VisitPhotosComponent implements OnInit {
  loadingCount:any=[]
  constructor(public visitUserService: VisitUserService,public userProfilesService:UserProfileService) {this.loadingCount.length=8 }

  ngOnInit(): void {
  }
 
}




