import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-about',
  templateUrl: './visit-about.component.html',
  styleUrls: ['./visit-about.component.scss']
})
export class VisitAboutComponent implements OnInit {
  personalInfo:any= [
    {name:'Basic Info',status:true},
    {name:'Work',status:false},
    {name:'Education',status:false},
    {name:'Place Lived',status:false},
    {name:'Relationship',status:false},
    {name:'Religion',status:false}
  ]
  constructor(public visitUserService: VisitUserService,
    public userProfilesService:UserProfileService
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }
  choseCategory(index:any) {
    for(let i = 0;i<this.personalInfo.length;i++) {
      this.personalInfo[i].status=false
    }
    this.personalInfo[index].status=true
  }
}
