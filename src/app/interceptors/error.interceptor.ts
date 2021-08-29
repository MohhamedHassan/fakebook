import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from "rxjs/operators";
import { Router } from '@angular/router';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err:any) => {
      console.log(err)
      if(!err.url.includes('login') && !err.url.includes('register')) {
        if ([401, 403].indexOf(err.status) !== -1) {
          this.router.navigate(["/auth/signin"]);
          localStorage.removeItem("fakebookToken");
        } else {
          this.router.navigate(["/error"])
        }
      }
      return throwError(err)
    }))
  }
  constructor(
    private router: Router) {
}

}
