import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-visit-about',
  templateUrl: './visit-about.component.html',
  styleUrls: ['./visit-about.component.scss']
})
export class VisitAboutComponent implements OnInit,OnDestroy {
  personalInfo:any
  personalSub:Subscription
  constructor(public visitUserService: VisitUserService,
    public userProfilesService:UserProfileService,
    private translate:TranslateService
    ) { 
    this.personalSub =  translate.get("about.personalInfo").subscribe(
        res => this.personalInfo = res
      )
    }
get lang() {return localStorage.getItem('currenLanguage') || 'en'}
  ngOnInit(): void {
  }
  choseCategory(index:any) {
    for(let i = 0;i<this.personalInfo.length;i++) {
      this.personalInfo[i].status=false
    }
    this.personalInfo[index].status=true
  }
  ngOnDestroy() {
    if(this.personalSub) this.personalSub.unsubscribe() 
  }
}
