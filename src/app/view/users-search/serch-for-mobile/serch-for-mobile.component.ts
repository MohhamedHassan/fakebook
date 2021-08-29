import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-serch-for-mobile',
  templateUrl: './serch-for-mobile.component.html',
  styleUrls: ['./serch-for-mobile.component.scss']
})
export class SerchForMobileComponent implements OnInit {
  searchLoading:boolean=false
  searchResult:any=[]
  constructor(public userProfilesService:UserProfileService,
    private title:Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle("Search")
  }
  searchForUsers(inputValue:any) {
    if (inputValue.value.trim() != "") {
     this.searchLoading=true
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
    }
 }
 clear(input:any) {
    if(input.value.trim() == "")  this.searchResult = []
 }
}
