import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerchForMobileComponent } from './serch-for-mobile/serch-for-mobile.component';

const routes: Routes = [
  {
    path:"",
    component:SerchForMobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersSearchRoutingModule { }
