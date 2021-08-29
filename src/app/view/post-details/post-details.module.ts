import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostDetailsRoutingModule,
    MatMenuModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    SwiperModule
  ]
})
export class PostDetailsModule { }
