import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { emptyContent } from 'src/app/shared/emptyContentValidator';

@Component({
  selector: 'app-userprofile-intro',
  templateUrl: './userprofile-intro.component.html',
  styleUrls: ['./userprofile-intro.component.scss']
})
export class UserprofileIntroComponent implements OnInit,OnDestroy {

  showBioTextArea = false
  bioLoading: boolean = false
  bioForm: FormGroup
  subscriptions: any[] = [];
  textAreaLength: any = 0
  @ViewChild('bioo', { static: false }) bioo: ElementRef
  constructor(public userProfilesService:UserProfileService,
    private cd: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.bioForm = this.fb.group({
      bio: [``, [Validators.required, emptyContent]]
    })
  }
  addBio(value: any) {
    this.bioLoading = true
    this.subscriptions.push(
      this.userProfilesService.addPersonalInfo(value).subscribe(
        res => {
          this.showBioTextArea = false
          this.bioLoading = false
          this.subscriptions.push(
            this.userProfilesService.getMyProfile().subscribe(
              (res: any) => {
                this.userProfilesService.userProfile = res?.user
              },
              err => {
              }

            )
          )
        },
        err => {
          this.showBioTextArea = false
          this.bioLoading = false
        }
      )
    )
  }
    //  start count bio textarea length
    remaining() {
      this.showBioTextArea = true
      this.cd.detectChanges()
      this.textAreaLength = this.bioo.nativeElement.value.length
    }
    //  end count bio textarea length
    deleteBio() {
      this.bioLoading = true
      this.subscriptions.push(
        this.userProfilesService.deleteInfo({ bio: '' }).subscribe(
          res => {
            this.bioForm.reset()
            this.subscriptions.push(
              this.userProfilesService.getMyProfile().subscribe(
                (res: any) => {
                  this.bioLoading = false
                  this.showBioTextArea = false
                  this.userProfilesService.userProfile = res?.user
                  this.openSnackBar(`Bio deleted Successfully`, "Deleted")
                },
                err => {
                  this.bioLoading = false
                }
  
              )
            )
          },
          err => {
            this.bioLoading = false
          }
        )
      )
    }
    openSnackBar(one: any, two: any) {
      this._snackBar.open(one, two, {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        duration: 3000
      });
    }
      //  start batch value for bio textarea to edit the bio
  patchhValue() {
    this.bioForm.patchValue({
      bio: this.userProfilesService?.userProfile?.bio
    })
  }
  //  end batch value for bio textarea to edit the bio
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }
}
