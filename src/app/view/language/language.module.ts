import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageRoutingModule } from './language-routing.module';
import { LangComponent } from './lang/lang.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LangComponent
  ],
  imports: [
    CommonModule,
    LanguageRoutingModule,
    SharedModule
  ]
})
export class LanguageModule { }
