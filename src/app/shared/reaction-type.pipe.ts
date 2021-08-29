import { Pipe, PipeTransform, Renderer2 } from '@angular/core';

@Pipe({
  name: 'reactionType'
})
export class ReactionTypePipe implements PipeTransform {
  transform(users:any,reactionType:any):any {
        if(!reactionType) return users
        return users.filter((item:any) => item?.reaction==reactionType)
  }

}
