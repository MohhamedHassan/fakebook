import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
 show:boolean=true
 currentLang:any
  constructor(private translateService:TranslateService,
    public userProfilesService:UserProfileService,private title:Title) { title.setTitle("Fakebook") }

  ngOnInit(): void {
    window.scroll(0,0)
    this.currentLang = localStorage.getItem("currenLanguage") || "en"
  }
  saveLanguageToLocalStorage(lang:any) {
    if(lang.value=='ar') {
      document.body.classList.add('rtll')
    } else {
      document.body.classList.remove('rtll')
    }
    this.translateService.setDefaultLang(lang.value)
    this.translateService.use(lang.value)
    localStorage.setItem("currenLanguage",lang.value)
    this.currentLang=lang.value
    this.show=true
 }
}
