import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotUserGuard } from './guarda/not-user.guard';
import { UserGuard } from './guarda/user.guard';
import { NotFoundComponent } from './notFound/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth/signin',
    pathMatch:'full'
  },
  {
    path:'auth',
    canActivate:[NotUserGuard],
    loadChildren: () => import('src/app/view/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'myProfile',
    canActivate:[UserGuard],
    loadChildren: () => import('src/app/view/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path:'postDetails/:id',
    canActivate:[UserGuard],
    loadChildren: () => import('src/app/view/post-details/post-details.module').then(m => m.PostDetailsModule)
  },
  {
    path:'peopleYouMayKnow',
    canActivate:[UserGuard],
    loadChildren: () => import('src/app/view/people-you-may-know/people-you-may-know.module').then(m => m.PeopleYouMayKnowModule)
  },
  {
    path:'visit/:id',
    canActivate:[UserGuard],
    loadChildren: () => import('src/app/view/visit-user/visit-user.module').then(m => m.VisitUserModule)
  },
  {
    path:'homePage',
    canActivate:[UserGuard],
    loadChildren: () => import('src/app/view/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path:'search',
    canActivate:[UserGuard],
    loadChildren: () => import('src/app/view/users-search/users-search.module').then(m => m.UsersSearchModule)
  },
  {
    path:'notifications',
    canActivate:[UserGuard],
    loadChildren: () => import('src/app/view/notifications-for-mobile/notifications-for-mobile.module').then(m => m.NotificationsForMobileModule)
  },
  {
     path:"**",
     component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
