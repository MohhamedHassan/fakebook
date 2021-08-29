import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  signup(userInfo:User) {
    return this.http.post(`${environment.apiUrl}/register`,userInfo)
  }

  signin(userInfo:User) {
    return this.http.post(`${environment.apiUrl}/login`,userInfo)
  }
  getToken() {
    return localStorage.getItem('fakebookToken')
  }
  logout() {
    return this.http.post(`${environment.apiUrl}/logout`,'')
  }
  isloggedIn() {
    return !! localStorage.getItem('fakebookToken')
  }
  isLogin() {
    return !!localStorage.getItem("fakebookToken")
  }
}
