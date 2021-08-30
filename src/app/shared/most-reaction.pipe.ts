import { Pipe, PipeTransform, Renderer2 } from '@angular/core';

@Pipe({
  name: 'mostReaction',
  pure:false
})
export class MostReactionPipe implements PipeTransform {
  constructor(private renrder:Renderer2) {}
  transform(numOfLove:any,numOfSad:any,numOfWow:any,numOfHaha:any,numOfAngr:any,numOfLike:any,img:any):any {
      let numberOfReactions:any  = [numOfLove,numOfSad,numOfWow,numOfHaha,numOfAngr,numOfLike]
      let max
      let reaction = ['love','sad','wow','haha','angry','like']
      max = Math.max(...numberOfReactions)
      let imgSrc = reaction[numberOfReactions.indexOf(max)]
      if (max != 0) {
        this.renrder.removeClass(img,"d-none")
        return `assets/${imgSrc}.png`
      }
      else {
        this.renrder.addClass(img,"d-none")
        return ''
      }
  }

}
