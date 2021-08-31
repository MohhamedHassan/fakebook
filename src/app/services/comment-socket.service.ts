import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentSocketService {
  socket:any
  showNotification:boolean=false
  showFollowNotification:boolean=false
  ownerOfTheComent:any
  postId:any
  commenrOrReact:any
  notificationId:any
  constructor() {
    this.socket = io(`${environment.apiUrl}`,
    {query:{ token:`${localStorage.getItem('fakebookToken')}`} })
   }
   listen(eventName:any) {
    return new Observable((Subscriber) => {
          this.socket.on(eventName,(data:any) => {
           Subscriber.next(data)
          })
     })
   }
   async emit(eventname:any,data:any) {
     this.socket.emit(eventname,data)
   }
}
