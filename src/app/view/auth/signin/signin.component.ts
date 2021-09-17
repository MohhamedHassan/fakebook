import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit , OnDestroy  {
  textOrPassword:boolean=true
  signinForm:FormGroup
  signinError:string=''
  signinErrorLoading:boolean=false
  subscriptions:any[]=[]
  socket:any
  translatedTitle:any
  languages = [
    {lang:"English",code:"en"},
    {lang:"Deutsch",code:"de"},
    {lang:"Türkçe",code:"tr"},
    {lang:"العربية",code:"ar"},
  ]
  constructor(private fb:FormBuilder,
    private authservice:AuthService,
    private title:Title,
    private translate:TranslateService,
    private userservice:UserProfileService,
    private router:Router) { 
      this.subscriptions.push( this.translate.get('auth.signinTitle').subscribe(res => {
        title.setTitle(res)
      }))
     
   
    
  }
  saveLanguageToLocalStorage(lang:any) {
    if(lang=='ar') {
      document.body.classList.add('rtll')
    } else {
      document.body.classList.remove('rtll')
    }
    this.translate.setDefaultLang(lang)
    this.translate.use(lang)
    localStorage.setItem("currenLanguage",lang)
    this.signinError=''
    this.subscriptions.push( this.translate.get('auth.signinTitle').subscribe(res => {
      this.title.setTitle(res)
    }))
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signin(userInfo:any) {
    this.signinErrorLoading=true
     this.subscriptions.push(
      this.authservice.signin(userInfo).subscribe(
        (res:any) => {
          this.signinError=''
          this.signinErrorLoading=false
          this.userservice.myNotifications=[]
          localStorage.setItem('fakebookToken',res?.token)
          location.reload()
          this.subscriptions.push(
            this.userservice.getMyProfile().subscribe(
              (res:any) => {
                this.userservice.userProfile=res?.user
                this.router.navigate(["/homePage"])
                this.subscriptions.push(
                  this.userservice.getMyNotifications().subscribe(
                    (res:any) => {
                      this.userservice.myNotifications=res?.newNotification
                    
                    },
                    err => {}
                  )
                )
              } ,err => {
              }
            )
          )
         
          
        } , 
        err => {
          console.log(err)
          let lang = localStorage.getItem("currenLanguage")
          if (lang == 'ar') this.signinError=err?.error?.arabic
          else if (lang == 'tr') this.signinError=err?.error?.turkish
          else if (lang == 'de') this.signinError=err?.error?.german
          else if (lang == 'en') this.signinError=err?.error?.english
          this.signinErrorLoading=false
        }
      )
     )
    
  }


  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }

}
