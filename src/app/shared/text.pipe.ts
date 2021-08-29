import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(text:string,index:number,seeMoreIndex:number): any { 
    let output:string
    if (index==seeMoreIndex) return text
    else {
      output = text.slice(0,500)
      return output
    }
  }


}
