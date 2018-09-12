import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import {  AdminComponent } from './admin/admin.component';
import {  RegisterComponent } from './register/register.component';
import {  ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component:AboutComponent },
  {path: 'how-it-works', component:HowItWorksComponent},
  {path: 'service-providers', component:ServiceProvidersComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  
  
})
export class AppRoutingModule { }
