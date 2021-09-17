import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { emptyContent } from 'src/app/shared/emptyContentValidator';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.scss']
})
export class UserAboutComponent implements OnInit,OnDestroy {
  nameForm:FormGroup
  addWorkForm:FormGroup
  addReligionForm:FormGroup
  addStudyForm:FormGroup
  addSocialForm:FormGroup
  addCityForm:FormGroup
  genderForm:FormGroup
  changePasswordForm:FormGroup
  changePasswordMSG:string=""
  birthDateForm:FormGroup
  date:any
  DayMonthYear: any;
  userProfileLoading:boolean=true
  showInputs:any = []
  personalInfo:any
  deleted:any
  deletedSuc:any
  subscriptions :any[] = [];
  constructor(public userProfilesService:UserProfileService,
    private title:Title,
    private fb:FormBuilder,
    private userservice:UserProfileService,
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar,
    private translate:TranslateService
    ) { 
      
      this.subscriptions.push(
        translate.get("about.personalInfo").subscribe(
          res => this.personalInfo = res
        )
      )
      this.subscriptions.push(
        translate.get("about.deleted").subscribe(
          res => this.deleted = res
        )
      )
      this.subscriptions.push(
        translate.get("about.deletedSuc").subscribe(
          res => this.deletedSuc = res
        )
      )
        
   } 
choseCategory(index:any) {
  for(let i = 0;i<this.personalInfo.length;i++) {
    this.personalInfo[i].status=false
  }
  this.personalInfo[index].status=true
}
get lang() {return localStorage.getItem("currenLanguage") || "en"}
  ngOnInit(): void {
  this.showInputs.length=10
  this.showInputs.fill(false,0,10)
   this.subscriptions.push(
    this.userProfilesService.getMyProfile().subscribe(
      (res:any) =>{
        this.userProfilesService.userProfile=res?.user
        this.date=this.userProfilesService.userProfile?.birthDate
        this.userProfileLoading=false
        this.title.setTitle(`${this.userProfilesService.userProfile?.firstName.slice(0,1).toUpperCase()}${this.userProfilesService.userProfile?.firstName.slice(1)} 
        ${this.userProfilesService.userProfile?.lastName.slice(0,1).toUpperCase()}${this.userProfilesService.userProfile?.lastName.slice(1)}`)
        this.nameForm = this.fb.group({
          firstName:[`${this.userProfilesService.userProfile?.firstName}`,[Validators.required,emptyContent]],
          lastName:[`${this.userProfilesService.userProfile?.lastName}`,[Validators.required,emptyContent]]
        })
        this.birthDateForm = this.fb.group({
          birthDate:['',Validators.required]
       })
        this.genderForm = this.fb.group({
           gender:[`${this.userProfilesService.userProfile?.gender}`,Validators.required]
        })
        this.addStudyForm = this.fb.group({
          study:[`${this.userProfilesService.userProfile?.study || ''}`,[Validators.required,emptyContent]],
        })
        this.addWorkForm  = this.fb.group({
          work:[`${this.userProfilesService.userProfile?.work || ''}`,[Validators.required,emptyContent]],
        })
        this.addReligionForm = this.fb.group({
          religion:[`${this.userProfilesService.userProfile?.religion || ''}`,[Validators.required,emptyContent]],
        })
        this.addSocialForm = this.fb.group({
          socialCondition:[`${this.userProfilesService.userProfile?.socialCondition || ''}`,Validators.required],
        })
        this.addCityForm = this.fb.group({
          location:[`${this.userProfilesService.userProfile?.location || ''}`,[Validators.required,emptyContent]],
        })
        this.changePasswordForm = this.fb.group({
          password:[``,Validators.required],
          newPassword:[``,Validators.required]
        })
      },
      err => {
        this.userProfileLoading=false
      }
      
    )
   )
  }
  updateBirthDate(value:any) {
   value.birthDate = this.datePipe.transform(this.date, 'yyy-MM-dd')
   this.updatePersonalInfo(value)
  }
updatePersonalInfo(value:any) {
   this.subscriptions.push(
    this.userservice.updatePersonalInfo(value).subscribe(
      res => {
        this.userProfileLoading=true
        for (let i = 0 ; i < this.showInputs.length;i++) this.showInputs[i]=false 
        this.getDataAfterUpdate()
      },

      err => {
        this.userProfileLoading=false
        for (let i = 0 ; i < this.showInputs.length;i++) this.showInputs[i]=false 
      }
    ) 
   )
}
addPersonalInfo(value:any) {
this.subscriptions.push(
  this.userservice.addPersonalInfo(value).subscribe(
    res => {
      this.userProfileLoading=true
      for (let i = 0 ; i < this.showInputs.length;i++) this.showInputs[i]=false 
       this.getDataAfterUpdate()
    },

    err => {
      this.userProfileLoading=false
      for (let i = 0 ; i < this.showInputs.length;i++) this.showInputs[i]=false 
    }
  )
)
  
}

deletePersonalInfo(value:any,info:any) {
  this.userProfileLoading=true
  this.subscriptions.push(
    this.userProfilesService.deleteInfo(value).subscribe(
      res => {
       this.openSnackBar(this.deletedSuc)
       for (let i = 0 ; i < this.showInputs.length;i++) this.showInputs[i]=false
       this.getDataAfterUpdate()
      },
      err => {
       this.userProfileLoading=false
      }
    )
  )
}

getDataAfterUpdate() {
 this.subscriptions.push(
  this.userProfilesService.getMyProfile().subscribe(
    (res:any) =>{
      this.userProfileLoading=false
      this.userProfilesService.userProfile=res?.user
      this.title.setTitle(`${this.userProfilesService.userProfile?.firstName.slice(0,1).toUpperCase()}${this.userProfilesService.userProfile?.firstName.slice(1)} 
      ${this.userProfilesService.userProfile?.lastName.slice(0,1).toUpperCase()}${this.userProfilesService.userProfile?.lastName.slice(1)}`)
    },
    err => {
      this.userProfileLoading=false
    }
    
  )
 )
}
openSnackBar(one:any) {
  this._snackBar.open( one,  this.deleted, {
    horizontalPosition: 'left',
    verticalPosition: 'bottom',
    duration: 3000
  });
}
updatePassword(value:any) {

  this.userProfileLoading=true
  this.subscriptions.push(
    this.userProfilesService.updatePassword(value.value).subscribe(
      (res:any) => {
        value.reset()
        this.userProfileLoading=false
        this.changePasswordMSG=res?.erorr || res?.result
      } , err => {
        value.reset()
        this.userProfileLoading=false
        this.changePasswordMSG=err?.error?.error
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
