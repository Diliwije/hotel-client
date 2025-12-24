import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {NotFoundPage} from './pages/not-found-page/not-found-page';
import {SecurityContext} from './pages/security/security-context/security-context';
import {Login} from './pages/security/login/login';
import {Register} from './pages/security/register/register';
import {RegisterVerification} from './pages/security/register-verification/register-verification';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component:HomePage,
  },

  {
    path: 'security',
    component:SecurityContext,
    children:[
      {
        path: '',
        redirectTo: '/security/login',
        pathMatch: 'full',
      },
      {path: 'login', component:Login} ,
      {path: 'register', component:Register},
      {path: 'register-verification/:email', component:RegisterVerification}
    ]

  },

  {
    path: '**',
    component:NotFoundPage,
  },
];
