import { Pipe, PipeTransform, Renderer2 } from '@angular/core';

@Pipe({
  name: 'secondReaction',
  pure:false
})
export class SecondReactionPipe implements PipeTransform {
constructor(private rendrer:Renderer2) {}
   transform(numOfLove:any,numOfSad:any,numOfWow:any,numOfHaha:any,numOfAngr:any,numOfLike:any,bool:any):any {
    let numberOfReactions:any  = [numOfLove,numOfSad,numOfWow,numOfHaha,numOfAngr,numOfLike]
    let reaction = ['love','sad','wow','haha','angry','like']
    let max
    max = Math.max(...numberOfReactions)
    reaction.splice(numberOfReactions.indexOf(max),1)
    numberOfReactions.splice(numberOfReactions.indexOf(max),1)
    max = Math.max(...numberOfReactions)
    let imgSrc = reaction[numberOfReactions.indexOf(max)]
    if (max != 0) {
      this.rendrer.addClass(bool,"exist")
      this.rendrer.removeClass(bool,"d-none")  
      return `assets/${imgSrc}.png`
     
    }
    else {
      this.rendrer.addClass(bool,"d-none")  
      this.rendrer.removeClass(bool,"exist")   
      return ''
    }
}

}
