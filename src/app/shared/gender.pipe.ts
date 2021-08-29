import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(imgUrl:any,gender:any):any {
   if (imgUrl) return imgUrl
   else {
     if (gender == 'male') return 'assets/male.png'
     else if (gender == 'female') return 'assets/female.png'
   }
   return 'assets/male.png'
  }

}
