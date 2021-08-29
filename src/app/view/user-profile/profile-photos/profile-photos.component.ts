import { Component, HostListener, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss']
})
export class ProfilePhotosComponent implements OnInit,OnDestroy {
loading:boolean=false
modalRef: BsModalRef;
oldImgId:any
subscriptions :any[] = [];
  constructor(public userProfileService:UserProfileService,
    private router:Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  deleteProfileImg() {
    this.loading=true
     this.subscriptions.push(
      this.userProfileService.deletProfileImg().subscribe(
        (res:any) => {
          this.userProfileService.userProfile.profilePhoto = null
          this.loading=false
          this.modalRef.hide()
          this.router.navigate(["/myProfile/layout/posts"])
        },
        err =>  {
        }
      )
     )
  }
  deleteOldProfileImg(id:any) {
    this.loading=true
   this.subscriptions.push(
    this.userProfileService.deletOldProfileImg(id).subscribe(
      (res:any) => {
        this.loading=false
        this.userProfileService.userProfile = res
        this.modalRef.hide()
        this.router.navigate(["/myProfile/layout/posts"])
       
      },
      err =>  {
      }
    )
   )
  }
  reload() {location.reload()}
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
     this.router.navigate(["/myProfile"])
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
 }
}
