import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersSearchRoutingModule } from './users-search-routing.module';
import { SerchForMobileComponent } from './serch-for-mobile/serch-for-mobile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SerchForMobileComponent
  ],
  imports: [
    CommonModule,
    UsersSearchRoutingModule,
    SharedModule
  ]
})
export class UsersSearchModule { }
