import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(friends:any[],inputValue:string): any {
    
    if (!inputValue) return friends
    return friends.filter(i => {
      let name = `${i?.firstName} ${i?.lastName}`
        return name.toLowerCase().includes(inputValue.toLowerCase())
    })

  }

}
