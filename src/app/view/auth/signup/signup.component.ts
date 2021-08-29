import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,OnDestroy {
signUpForm:FormGroup
signupErrorLoading:boolean=false
signupError:string=""
textOrPassword:boolean=true
daysOfBirth:number[]=[]
yearsOfBirth:number[]=[]
monthsOfBirth:string[]=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
subscriptions:any[]=[]
  constructor(private fb:FormBuilder,
    private rendere:Renderer2,
    private authservice:AuthService,
    private title:Title,
    private router:Router,
    private userservice:UserProfileService) { 
     title.setTitle('Sign Up')
  }
get inputs() {
  return this.signUpForm.controls
}
  ngOnInit(): void {
    for (let i = 1;i<=31;i++) this.daysOfBirth.push(i)
    for (let i = 2021;i>=1905;i--) this.yearsOfBirth.push(i)
    this.signUpForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName :['',[Validators.required]], 
      email:['',[Validators.required,Validators.email]], 
      password :['',[Validators.required,Validators.minLength(6)]], 
      day :['',[Validators.required]],
      month :['',[Validators.required]],  
      year :['',[Validators.required]], 
      gender:['',[Validators.required]], 
    })
  }
signUp(userInfo:any) {
  if (this.signUpForm.status=='VALID') {
     this.signupErrorLoading=true
     let user:User = {
      firstName:userInfo.firstName,
      lastName:userInfo.lastName,
      email:userInfo.email,
      password:userInfo.password,
      birthDate:`${userInfo.year}/${userInfo.month.length == 1 ? '0'+userInfo.month : userInfo.month}/${userInfo.day.length == 1 ? '0'+userInfo.day : userInfo.day}`,
      gender:userInfo.gender
     }
  this.subscriptions.push(
    this.authservice.signup(user).subscribe(
      (res:any) => {
        this.signupErrorLoading=false
        this.signupError=''
        this.userservice.myNotifications=[]
        localStorage.setItem('fakebookToken',res.token)
        this.subscriptions.push(
          this.userservice.getMyNotifications().subscribe(
            (res:any) => {
              this.userservice.myNotifications=res?.newNotification
              this.subscriptions.push(
                this.userservice.getMyProfile().subscribe(
                  (res:any) => {
                    this.userservice.userProfile=res?.user
                    this.router.navigate(["/homePage"])
                  } ,err => {
                  }
                )
              )
            },
            err => {}
          )
        )
       
      },
      err => {
       this.signupErrorLoading=false
       this.signupError=err.error.error
      }
    )
  )
  }
} 
showErrorMessage(errorText:any,control:any) {
 
  if(this.signUpForm.get(control)?.touched && this.signUpForm.get(control)?.errors) {
     this.rendere.removeClass(errorText,'d-none')
  } else {
    this.rendere.addClass(errorText,'d-none')
  }
}
hideErrorMessage(errorText:any) {
 this.rendere.addClass(errorText,'d-none')
}

ngOnDestroy() {
  this.subscriptions.forEach(sub => {
    sub.unsubscribe()
  })
}

}
