import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "authentification", component: AuthenticationComponent },
    { path: "*", component: HomeComponent },
];
export const appRouteList: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
      path: 'home',
      component: HomeComponent
    },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouteList)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
