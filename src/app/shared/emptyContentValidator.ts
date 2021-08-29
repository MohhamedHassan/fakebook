import { AbstractControl } from "@angular/forms";

export function emptyContent(control:AbstractControl) {
    if(control.value) {
      if(control.value.trim()=='') return {invalidContetn:true}
    }
   return null
}