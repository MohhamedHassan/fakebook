import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangComponent } from './lang/lang.component';

const routes: Routes = [
  {
    path:'',
    component:LangComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule { }
