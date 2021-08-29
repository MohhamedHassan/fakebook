import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatMenuModule} from '@angular/material/menu';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UserprofilePhotosComponent } from './userprofile-photos/userprofile-photos.component';
import { UserprofileFollowingComponent } from './userprofile-following/userprofile-following.component';
import { UserprofileFollowersComponent } from './userprofile-followers/userprofile-followers.component';
import { UserprofileIntroComponent } from './userprofile-intro/userprofile-intro.component';
import { PeopeYouMayKnowComponent } from './peope-you-may-know/peope-you-may-know.component';
import { AddPostComponent } from './add-post/add-post.component';
@NgModule({
  declarations: [
    UserprofileComponent,
    UserAboutComponent,
    UserLayoutComponent,
    FriendsComponent,
    PhotosComponent,
    ProfilePhotosComponent,
    UserprofilePhotosComponent,
    UserprofileFollowingComponent,
    UserprofileFollowersComponent,
    UserprofileIntroComponent,
    PeopeYouMayKnowComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatMenuModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSkeletonLoaderModule,
    SwiperModule,
    CarouselModule.forRoot()
  ],
  providers: [
    DatePipe
  ]
})
export class UserProfileModule { }
