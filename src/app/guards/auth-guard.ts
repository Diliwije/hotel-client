
import {CanActivateFn, Router} from '@angular/router';
import {CookieManager} from '../services/cookie-manager';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
const cookieManager:CookieManager = inject(CookieManager);
const router:Router = inject(Router);


return cookieManager.tokenExistsWithPromise('token').then(resp =>{
if (resp){
  return true
}else {
  router.navigateByUrl('/security/login');
  return false;
}
})
  .catch( e=>{
    router.navigateByUrl('/security/login');
    return false;
  })
};
