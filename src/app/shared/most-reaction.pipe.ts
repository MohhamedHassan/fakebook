import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostReaction',
  pure:false
})
export class MostReactionPipe implements PipeTransform {

  transform(numOfLove:any,numOfSad:any,numOfWow:any,numOfHaha:any,numOfAngr:any,numOfLike:any):any {
      let numberOfReactions:any  = [numOfLove,numOfSad,numOfWow,numOfHaha,numOfAngr,numOfLike]
      let max
      let reaction = ['love','sad','wow','haha','angry','like']
      max = Math.max(...numberOfReactions)
      let imgSrc = reaction[numberOfReactions.indexOf(max)]
      if (max != 0) return `assets/${imgSrc}.png`
      else return ''
  }

}
