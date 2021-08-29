import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HompageComponent } from './hompage/hompage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { YouMayKnowComponent } from './you-may-know/you-may-know.component';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    HompageComponent,
    YouMayKnowComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    SwiperModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class HomePageModule { }
