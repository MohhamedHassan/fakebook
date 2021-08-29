import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleYouMayKnowService {
  constructor(private http:HttpClient) { }
  peopleYouMAyKnow(skip:any) {
    return this.http.get(`${environment.apiUrl}/suggestedUsers?limit=10&skip=${skip}`)
  }
  getAllPeopleYouMAyKnow() {
    return this.http.get(`${environment.apiUrl}/suggestedUsers`)
  }
}
