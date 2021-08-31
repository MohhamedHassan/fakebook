import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  userProfile:any
  userPosts:any=[]
  myFollowingPosts: any = []
  followers:any[]=[]
  following:any[]=[]
  photos:any[]=[]
  myNotifications:any=[]
  oldNotifications:any=[]
  skeltonLoading:boolean=true
  skeltonLoadingForPhotos:boolean=true
  skeltonLoadingForFollowing:boolean=true
  skeltonLoadingFollowers:boolean=true  
  HomePageSkeltonLoading: boolean = true
  popUP:any=false
  constructor(private http:HttpClient) { }
  uploadCoverImg(coverImg:any) {
     return this.http.post(`${environment.apiUrl}/coverImage`,coverImg)
  }
  deletCoverImg() {
    return this.http.delete(`${environment.apiUrl}/coverImage`)
 }
 uploadProfileImg(coverImg:any) {
  return this.http.post(`${environment.apiUrl}/profilePhoto`,coverImg)
}
deletProfileImg() {
 return this.http.delete(`${environment.apiUrl}/mainProfilePhoto`)
}
deletOldProfileImg(id:any) {
  return this.http.delete(`${environment.apiUrl}/oldProfilePhoto/${id}`)
 }
  getMyProfile() {
    return this.http.get(`${environment.apiUrl}/myProfile`)
 } 
 makeApost(content:any) {
  return this.http.post(`${environment.apiUrl}/addPost`,content)
}
// getMyPosts() {
//   return this.http.get(`${environment.apiUrl}/myPosts`)
// } 
deletPost(id:any) {
  return this.http.delete(`${environment.apiUrl}/deletePost/${id}`)
 }
 updatePostContent(id:any,content:any) {
  return this.http.put(`${environment.apiUrl}/updatePost/${id}`,content)
 }
 updatePostImage(id:any,image:any) {
  return this.http.put(`${environment.apiUrl}/updatePostImage/${id}`,image)
 }
 addPersonalInfo(value:any) {
  return this.http.post(`${environment.apiUrl}/personalInfo`,value)
 }
 updatePersonalInfo(value:any) {
  return this.http.put(`${environment.apiUrl}/profile`,value)
 }
 getFollowing() {
  return this.http.get(`${environment.apiUrl}/myFollowings`)
 }
 getFollowers() {
  return this.http.get(`${environment.apiUrl}/myFollowers`)
 }
 updatePassword(value:any) {
  return this.http.put(`${environment.apiUrl}/changePassword`,value)
 }
 deleteInfo(value:any) {
  return this.http.request('DELETE',  `${environment.apiUrl}/personalInfo`, {
    body:value
})
 }
 getMyPhotos() {
  return this.http.get(`${environment.apiUrl}/allPhotos`)
 }
 getMyFollowingPosts() {
  return this.http.get(`${environment.apiUrl}/followingPosts`)
 }
 getPostComment(id:any) {
  return this.http.get(`${environment.apiUrl}/singlePost/${id}`)
 }
 darkModeStatus() {
  return this.http.post(`${environment.apiUrl}/darkMode`,{})
 }
 deletComment(id:any) {
  return this.http.request('DELETE',  `${environment.apiUrl}/deleteComment`, {
    body:{id}
})
 }
 updateComment(body:any) {
  return this.http.put(`${environment.apiUrl}/updateComment`,body)
 }
 searchForUsers(searchValue:any) {
   return this.http.get(`${environment.apiUrl}/searchUsers?userName=${searchValue}`)
 }
 getMyNotifications() {
  return this.http.get(`${environment.apiUrl}/myNotifications`)
 }
}