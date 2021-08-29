import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPipe } from './text.pipe';
import { LangPipe } from './lang.pipe';
import { SearchPipe } from './search.pipe';
import { ReactionTypePipe } from './reaction-type.pipe';
import { GenderPipe } from './gender.pipe';
import { MostReactionPipe } from './most-reaction.pipe';
import { SecondReactionPipe } from './second-reaction.pipe';



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
    CommonModule
  ], 
  exports: [TextPipe,LangPipe,SearchPipe,ReactionTypePipe,GenderPipe,MostReactionPipe,SecondReactionPipe]
})
export class SharedModule { }
