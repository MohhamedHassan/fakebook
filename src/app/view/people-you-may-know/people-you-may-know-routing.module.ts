import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestedUsersComponent } from './suggested-users/suggested-users.component';

const routes: Routes = [
  {
    path:'',
    component:SuggestedUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleYouMayKnowRoutingModule { }
