import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPipe } from './text.pipe';
import { LangPipe } from './lang.pipe';
import { SearchPipe } from './search.pipe';
import { ReactionTypePipe } from './reaction-type.pipe';
import { GenderPipe } from './gender.pipe';
import { MostReactionPipe } from './most-reaction.pipe';
import { SecondReactionPipe } from './second-reaction.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    TextPipe,
    LangPipe,
    SearchPipe,
    ReactionTypePipe,
    GenderPipe,
    MostReactionPipe,
    SecondReactionPipe
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage:'en',
      loader: {
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ], 
  exports: [TextPipe,LangPipe,SearchPipe,
    ReactionTypePipe,GenderPipe,MostReactionPipe,
    SecondReactionPipe,TranslateModule]
})
export class SharedModule { }
export function createTranslateLoader(http:HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
