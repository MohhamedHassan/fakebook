import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';

const routes: Routes = [
  {
    path:'',
    component:HompageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
