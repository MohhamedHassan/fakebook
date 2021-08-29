import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {
    path:'profilePhotos',
    component:ProfilePhotosComponent
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
  component:UserLayoutComponent,
  children:[
    {path:'posts',component:UserprofileComponent},
    {path:'about',component:UserAboutComponent},
    {path:'friends',component:FriendsComponent},
    {path:'photos',component:PhotosComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
