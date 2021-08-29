import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsForMobileRoutingModule } from './notifications-for-mobile-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsForMobileRoutingModule,
    SharedModule
  ]
})
export class NotificationsForMobileModule { }
