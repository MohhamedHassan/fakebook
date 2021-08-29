import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotUserGuard implements CanActivate {
  constructor(private authService:AuthService,
    private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    if(this.authService.isLogin()) {
      this.router.navigate(["/homePage"])
      return false
    }
    return true
  }
  
}
