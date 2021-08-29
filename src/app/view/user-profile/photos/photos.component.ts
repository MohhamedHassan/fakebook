import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  loadingCount:any=[]
  constructor(public userProfilesService:UserProfileService) { this.loadingCount.length=8 }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
