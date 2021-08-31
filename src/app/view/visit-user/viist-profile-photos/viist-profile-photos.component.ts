import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitUserService } from 'src/app/services/visit-user.service';

@Component({
  selector: 'app-viist-profile-photos',
  templateUrl: './viist-profile-photos.component.html',
  styleUrls: ['./viist-profile-photos.component.scss']
})
export class ViistProfilePhotosComponent implements OnInit,OnDestroy {
  subscriptions :any[] = [];
  constructor( public visituser: VisitUserService,
    private activatedroute: ActivatedRoute,
    private title:Title,
    private router:Router  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
    this.subscriptions.push(
      this.activatedroute.params.subscribe(param => {
        this.visituser.userId=param.id
        this.subscriptions.push(
          this.visituser.getuserProfile(param.id).subscribe(
            (res: any) => {
              this.visituser.userProfile = res.user
              this.title.setTitle(`${this.visituser.userProfile?.firstName.slice(0,1).toUpperCase()}${this.visituser.userProfile?.firstName.slice(1)} 
              ${this.visituser.userProfile?.lastName.slice(0,1).toUpperCase()}${this.visituser.userProfile?.lastName.slice(1)}`)
            },
            err => {}
          )
        )
      })
    )
  }
  reload() {location.reload()}
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.router.navigate(['/visit',this.visituser?.userId])
 }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
 }
}
