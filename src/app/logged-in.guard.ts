import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('username')) {
      return true;
    }
  
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }


/*  
  constructor(private authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isLoggedIn = this.authService.isLoggedIn();
      console.log('canActivate', isLoggedIn);
      return isLoggedIn;
  }
*/
}
