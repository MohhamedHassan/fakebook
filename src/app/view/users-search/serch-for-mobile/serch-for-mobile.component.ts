import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-serch-for-mobile',
  templateUrl: './serch-for-mobile.component.html',
  styleUrls: ['./serch-for-mobile.component.scss']
})
export class SerchForMobileComponent implements OnInit,OnDestroy {
  searchLoading:boolean=false
  searchResult:any=[]
  subscriptions:any[]=[]
  constructor(public userProfilesService:UserProfileService,
    private title:Title,
    private translate:TranslateService
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.subscriptions.push( this.translate.get("posts.search").subscribe(res => {
      this.title.setTitle(res)
    }))
  }
  searchForUsers(inputValue:any) {
    if (inputValue.value.trim() != "") {
     this.searchLoading=true
     this.subscriptions.push(
      this.userProfilesService.searchForUsers(inputValue.value).subscribe(
        res => {
          this.searchLoading=false
          if (Array.isArray(res)) {
            this.searchResult = res
          } else  {
           this.searchResult = []
          }
        } , err => {}
      )
     )
    }
 }
 clear(input:any) {
    if(input.value.trim() == "")  this.searchResult = []
 }
 ngOnDestroy() {
  this.subscriptions.forEach(sub => {
    sub.unsubscribe()
  })
}
}
