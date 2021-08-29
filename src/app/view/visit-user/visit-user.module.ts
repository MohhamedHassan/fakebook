import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitUserRoutingModule } from './visit-user-routing.module';
import { VisitLayoutComponent } from './visit-layout/visit-layout.component';
import { VisitProfileComponent } from './visit-profile/visit-profile.component';
import { VisitAboutComponent } from './visit-about/visit-about.component';
import { VisitPhotosComponent } from './visit-photos/visit-photos.component';
import { VisitFriendsComponent } from './visit-friends/visit-friends.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViistProfilePhotosComponent } from './viist-profile-photos/viist-profile-photos.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatMenuModule } from '@angular/material/menu';
import { VisitIntroComponent } from './visit-intro/visit-intro.component';
import { VisitFollowingComponent } from './visit-following/visit-following.component';
import { VisitFollowersComponent } from './visit-followers/visit-followers.component';
import { LeftSidePhotosComponent } from './left-side-photos/left-side-photos.component';


@NgModule({
  declarations: [
    VisitLayoutComponent,
    VisitProfileComponent,
    VisitAboutComponent,
    VisitPhotosComponent,
    VisitFriendsComponent,
    ViistProfilePhotosComponent,
    VisitIntroComponent,
    VisitFollowingComponent,
    VisitFollowersComponent,
    LeftSidePhotosComponent,
  ],
  imports: [
    CommonModule,
    VisitUserRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    SwiperModule,
    MatSnackBarModule,
    MatMenuModule,
    CarouselModule.forRoot()
  ]
})
export class VisitUserModule { }
