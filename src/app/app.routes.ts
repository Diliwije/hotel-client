import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {NotFoundPage} from './pages/not-found-page/not-found-page';
import {SecurityContext} from './pages/security/security-context/security-context';
import {Login} from './pages/security/login/login';
import {Register} from './pages/security/register/register';
import {RegisterVerification} from './pages/security/register-verification/register-verification';
import {ForgotPassword} from './pages/security/forgot-password/forgot-password';
import {ResetPwdVerification} from './pages/security/reset-pwd-verification/reset-pwd-verification';
import {ResetPwd} from './pages/security/reset-pwd/reset-pwd';
import {Settings} from './pages/settings/settings';
import {SearchResult} from './pages/search-result/search-result';
import {authGuard} from './guards/auth-guard';

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
      {path: 'forgot-password', component:ForgotPassword},
      {path: 'register-verification/:email', component:RegisterVerification},
      {path: 'reset-pwd-verification/:email', component: ResetPwdVerification},
      {path: 'reset-pwd', component: ResetPwd},
    ]

  },

  {
    path: 'search',
    component: SearchResult,
  },

  {
    path: 'settings',
    component:Settings,
    canActivate:[authGuard]
  },

  {
    path: '**',
    component:NotFoundPage,
  }


];
