import { Component, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { emptyContent } from 'src/app/shared/emptyContentValidator';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit,OnDestroy {

  coverImgLoding:boolean=false
  profileImgLoding:boolean=false
  modalLoadin:boolean=false
  bioLoading:boolean=false
  modalRef: BsModalRef;
  bioForm:FormGroup
  textAreaLength:any=0
  showRemaining:boolean=false
  profileOnHoverforFollowers:number=-1
  subscriptions :any[] = [];
  translatedSnacBarTextOne:any
  translatedSnacBarTextTwo:any
  @ViewChild('bioo') bioo:ElementRef
  constructor(
    public userProfilesService:UserProfileService,
    private modalService: BsModalService,
    private title:Title,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private router:Router,
    private rendrer:Renderer2,
    private translate:TranslateService
  ) { 
    this.subscriptions.push( this.translate.get('about.bioDeleted').subscribe(res => {
      this.translatedSnacBarTextOne=res
   }))
   this.subscriptions.push(
    this.translate.get('about.deleted').subscribe(res => {
      this.translatedSnacBarTextTwo=res
   }))
   }
  remaining(bioo:any) {
      this.showRemaining=true
      this.textAreaLength = bioo.value.length
  }
  addBio(value:any) {
    this.bioLoading=true
    this.subscriptions.push(
      this.userProfilesService.addPersonalInfo(value).subscribe(
        res => {
          this.bioLoading=false
          this.modalRef.hide()
          this.subscriptions.push(
            this.userProfilesService.getMyProfile().subscribe(
              (res:any) =>{
                this.userProfilesService.userProfile=res?.user
              },
              err => {
              }
              
            )
          )
        },
        err => {
          this.modalRef.hide()
          this.bioLoading=false
        }
      )
    )
  }
  get lang() {return localStorage.getItem("currenLanguage") || "en"}
  ngOnInit(): void {
    window.scroll(0,0)
    this.subscriptions.push(
      this.userProfilesService.getMyProfile().subscribe(
        (res:any) =>{
          this.userProfilesService.userProfile=res?.user
          this.userProfilesService.userPosts=res?.posts
          this.userProfilesService.skeltonLoading=false
          this.title.setTitle(`${this.userProfilesService.userProfile?.firstName.slice(0,1).toUpperCase()}${this.userProfilesService.userProfile?.firstName.slice(1)} 
          ${this.userProfilesService.userProfile?.lastName.slice(0,1).toUpperCase()}${this.userProfilesService.userProfile?.lastName.slice(1)}`)
          this.bioForm = this.fb.group({
            bio:[`${this.userProfilesService?.userProfile?.bio || ''}`,[Validators.required,emptyContent]]
          })
        },
        err => {
          this.userProfilesService.skeltonLoading=false
        }
        
      )
    )
   this.subscriptions.push(
    this.userProfilesService.getFollowers().subscribe(
      (res:any)=> {
        this.userProfilesService.followers=res?.followers
        this.userProfilesService.skeltonLoadingFollowers=false
      }, err => {
      }
    )
   )
  this.subscriptions.push(
    this.userProfilesService.getFollowing().subscribe(
      (res:any) => {
       this.userProfilesService.skeltonLoadingForFollowing=false
       this.userProfilesService.following=res?.followings?.following
      },
    )
  )
 this.subscriptions.push(
  this.userProfilesService.getMyPhotos().subscribe(
    (res:any) => {
     this.userProfilesService.skeltonLoadingForPhotos=false
     this.userProfilesService.photos=res
    },
    err => {}
  )
 )
  }
  selectCoverImg(event:any) {
    this.coverImgLoding=true
    let formdata = new FormData()
    formdata.append('coverImage',event.target.files[0])
      this.subscriptions.push(
        this.userProfilesService.uploadCoverImg(formdata).subscribe(
          (res:any) => {
            this.userProfilesService.userProfile=res
            this.coverImgLoding=false
          } ,
          err => {
            this.coverImgLoding=false
          }
        )
      )
  }
  deleteCoverImg() {
    this.modalLoadin=true
   this.subscriptions.push(
    this.userProfilesService.deletCoverImg().subscribe(
      (res:any) => {
        this.modalLoadin=false
        this.modalRef.hide()
        this.userProfilesService.userProfile = res
      },
      err =>  {
        this.modalRef.hide()
        this.modalLoadin=false
      }
    )
   )
  }
  
  selectProfileImg(event:any) {
    this.profileImgLoding=true
    let formdata = new FormData()
    formdata.append('profilePhoto',event.target.files[0])
     this.subscriptions.push(
      this.userProfilesService.uploadProfileImg(formdata).subscribe(
        (res:any) => {
          this.userProfilesService.userProfile=res
          this.profileImgLoding=false
        } ,
        err => {
          this.profileImgLoding=false
        }
      )
     )
  }
  deleteProfileImg() {
    this.modalLoadin=true
     this.subscriptions.push(
      this.userProfilesService.deletProfileImg().subscribe(
        (res:any) => {
          this.modalLoadin=false
          this.modalRef.hide()
          this.userProfilesService.userProfile = res
        },
        err =>  {
          this.modalRef.hide()
          this.modalLoadin=false;
        }
      )
     )
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  deleteBio() {
      this.subscriptions.push(
        this.userProfilesService.deleteInfo({bio:''}).subscribe(
          res => {
           this.bioForm.reset()
           this.showRemaining=false
           this.subscriptions.push(
            this.userProfilesService.getMyProfile().subscribe(
              (res:any) =>{
                this.userProfilesService.userProfile=res?.user
                this.openSnackBar(this.translatedSnacBarTextOne,this.translatedSnacBarTextTwo)
              },
              err => {
                this.bioLoading=false
              }
              
            )
           )
          },
          err => {
           this.bioLoading=false
          }
        )
      )
  }
  openSnackBar(one:any,two:any) {
    this._snackBar.open( one,  two, {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 3000
    });
  }
  // start navigate to profilePhotos component in case the user have a profile picture
  profilePhotoss(img:any) {
    if( this.userProfilesService.userProfile?.profilePhoto) {
   this.rendrer.setStyle(img,"borderWidth","6px")
   setTimeout(() => {
        this.rendrer.setStyle(img,"borderWidth","3px")
   }, 100);
   setTimeout(() => {
      this.router.navigate(['/myProfile/profilePhotos'])
}, 140);
}
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
 }
}
