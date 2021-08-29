import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(friends:any[],inputValue:string): any {
    
    if (!inputValue) return friends
    return friends.filter(i => {
      if (i.firstName) {
        return i.firstName.toLowerCase().includes(inputValue.toLowerCase()) || 
        i.lastName.toLowerCase().includes(inputValue.toLowerCase())
      }
    })

  }

}
