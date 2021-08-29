import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitUserService {
  userProfile: any=[]
  userPosts: any=[]
  following: any[]=[]
  followers: any[]=[]
  userId:any
  photos:any
  darkMode:any
  skeltonLoading:boolean=true
  userProfileLoading:boolean=true
  friendsSkeltonLoading:boolean=true
  skeltonLoadingFollowers:boolean=true
  skeltonLoadingPhotos:boolean=true
  constructor(private http:HttpClient) { }
  getuserProfile(id:any) {
    return this.http.get(`${environment.apiUrl}/profile/${id}`)
 } 
 getUserFollowing(id:any) {
  return this.http.get(`${environment.apiUrl}/userFollowings/${id}`)
 }
 getUserFollowers(id:any) {
  return this.http.get(`${environment.apiUrl}/userFollowers/${id}`)
}
getUserPhotos(id:any) {
  return this.http.get(`${environment.apiUrl}/allUserPhotos/${id}`)
}
}
