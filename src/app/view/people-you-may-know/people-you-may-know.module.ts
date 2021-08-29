import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleYouMayKnowRoutingModule } from './people-you-may-know-routing.module';
import { SuggestedUsersComponent } from './suggested-users/suggested-users.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SuggestedUsersComponent
  ],
  imports: [
    CommonModule,
    PeopleYouMayKnowRoutingModule,
    NgxSkeletonLoaderModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class PeopleYouMayKnowModule { }
