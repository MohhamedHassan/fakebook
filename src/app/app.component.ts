import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
import { CommentSocketService } from './services/comment-socket.service';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit    {
  title = 'Fakebook';
  darkModeLoading:boolean=false
  searchResult:any=[]
  searchLoading:any=true
  showSearchContainer:any=false
  reactImgSrc:any=""
  currentLang:any
  constructor (public userProfilesService:UserProfileService,
    public commentService:CommentSocketService,
    private router:Router,
    public authService:AuthService,
    private translateService:TranslateService) {
      this.currentLang = localStorage.getItem("currenLanguage") || "en"
      translateService.use(this.currentLang)
      if(this.currentLang=='ar') document.body.classList.add("rtll")
      userProfilesService.myNotifications=[]
      if(this.authService.isLogin()) {
        this.getProfile()
        this.getMyNotifications()


        this.commentService.listen("comment").subscribe(
          (res: any) => {
            if(res?.author == this.userProfilesService.userProfile?._id &&
               res?.user?._id != this.userProfilesService.userProfile?._id) {
              this.getMyNotifications()
              this.commentService.ownerOfTheComent = res?.user
              this.commentService.postId = res?.comment?.post?._id
              this.commentService.notificationId=res?.notificationId
              this.commentService.commenrOrReact = "comment"
              this.commentService.showNotification = true
              
              setTimeout(() => {
                this.commentService.showNotification = false
              }, 20000);
            }
          }, err => {
            this.router.navigate(["/error"])
          }
        )
        this.commentService.listen("reaction").subscribe(
          (res:any) => {
            if(res?.author == this.userProfilesService.userProfile?._id &&
              res?.user?._id != this.userProfilesService.userProfile?._id) {
                this.getMyNotifications()
             this.commentService.ownerOfTheComent = res?.user
             this.commentService.postId = res?.react?.post?._id
             this.commentService.notificationId=res?.notificationId
             this.commentService.commenrOrReact = "react"
             this.reactImgSrc=`assets/${res?.react?.reaction}.png` 
             this.commentService.showNotification = true
             setTimeout(() => {
               this.commentService.showNotification = false
             }, 20000);
           }
          },
          err => { this.router.navigate(["/error"])}
        )
        this.commentService.listen("follow").subscribe(
          (res:any) => {
             if(res?.id == this.userProfilesService.userProfile?._id) {
              this.getMyNotifications()
              this.commentService.ownerOfTheComent = res?.user
              this.commentService.notificationId=res?.notificationId
              this.commentService.showFollowNotification=true
  
              setTimeout(() => {
                this.commentService.showFollowNotification = false
              }, 20000);
             }
          },
          err => { this.router.navigate(["/error"])}
        )
      }
  
  }
  get lang() {return localStorage.getItem("currenLanguage") || 'en'}
ngOnInit() {
  if(this.authService.isLogin()) {
    this.getProfile()
    this.getMyNotifications()
  }
}
commentSound() {
  this.openNotification(this.commentService.notificationId,this.commentService.postId)
}
getProfile() {
  this.userProfilesService.getMyProfile().subscribe(
    (res:any) =>{
      this.userProfilesService.userProfile=res?.user
      this.darkModeLoading=false
    },
    err => {
    }
    
  )
}
darkModeToggle() {
  this.darkModeLoading=true
 this.userProfilesService.darkModeStatus().subscribe(
   res => {
   this.getProfile()
   } , err => {
   }
 )
}
logOut() {
  this.authService.logout().subscribe(res => {
    this.userProfilesService.userProfile=[]
    localStorage.removeItem("fakebookToken")
    this.router.navigate(["/auth/signin"])
    location.reload()
  },err => {
  })
}
searchForUsers(inputValue:any) {
   if (inputValue.value.trim() != "") {
     this.showSearchContainer=true
    this.searchLoading=true
     this.userProfilesService.searchForUsers(inputValue.value).subscribe(
       res => {
         this.searchLoading=false
         if (Array.isArray(res)) {
           this.searchResult = res
         } else  {
          this.searchResult = []
         }
       } , err => {}
     )
   }
}
cleartheInput(searcValue:any) {
  if (searcValue.value.trim() == "") {
    this.searchResult = []
  }
}
cloaseSearcConatiner(input:any){setTimeout(() => {
  this.showSearchContainer=false
  input.value=""
}, 200);}
getMyNotifications() {
  this.userProfilesService.getMyNotifications().subscribe(
    (res:any) => {
      this.userProfilesService.myNotifications=res?.newNotification
      this.userProfilesService.oldNotifications=res?.oldNotification
    },
    err => {}
  )
}

openNotification(id:any,postId:any) {
  let audio = new Audio()
  audio.src = "assets/Facebook Louder.mp3";
  audio.load();
  audio.play();
  this.commentService.emit("opened",{
     id
  }).then(
    res => {
        this.router.navigate(["/postDetails",postId])
        this.commentService.showNotification=false
        this.getMyNotifications()
    } , err => {
      this.router.navigate(["/error"])
    }
  )
}
openFollowNotification(userId:any,id:any) {
  this.commentService.emit("opened",{
   id
 }).then(
   res => {
       this.router.navigate(["/visit",userId])
       this.commentService.showFollowNotification=false
       this.getMyNotifications()
   } , err => {
     this.router.navigate(["/error"])
   }
 )
}
}
