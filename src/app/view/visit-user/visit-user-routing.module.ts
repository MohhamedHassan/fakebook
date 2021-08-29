import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViistProfilePhotosComponent } from './viist-profile-photos/viist-profile-photos.component';
import { VisitAboutComponent } from './visit-about/visit-about.component';
import { VisitFriendsComponent } from './visit-friends/visit-friends.component';
import { VisitLayoutComponent } from './visit-layout/visit-layout.component';
import { VisitPhotosComponent } from './visit-photos/visit-photos.component';
import { VisitProfileComponent } from './visit-profile/visit-profile.component';

const routes: Routes = [
  {
   path:'profilePhotos',
   component:ViistProfilePhotosComponent
  },
  {
    path:'',
    redirectTo:'layout/posts',
    pathMatch:'full'
  },
  {
    path:'layout',
    redirectTo:'layout/posts',
    pathMatch:'full'
  },
  {
  path:'layout',
  component:VisitLayoutComponent,
  children:[
    {path:'posts',component:VisitProfileComponent},
    {path:'about',component:VisitAboutComponent},
    {path:'friends',component:VisitFriendsComponent},
    {path:'photos',component:VisitPhotosComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitUserRoutingModule { }
