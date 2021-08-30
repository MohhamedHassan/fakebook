import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { environment } from 'src/environments/environment';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
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
  constructor(private fb:FormBuilder,
    private authservice:AuthService,
    private title:Title,
    private userservice:UserProfileService,
    private router:Router) { 
    title.setTitle('Sign In')
    
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
          
        } , 
        err => {
          this.signinError=err?.error?.error
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
