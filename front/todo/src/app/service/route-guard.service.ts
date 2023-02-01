import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcoderAuthenticationService } from './hardcoder-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcoderAuthenticationService:HardcoderAuthenticationService,
    private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcoderAuthenticationService.isUserLoggedIn())
      return true;
      this.router.navigate(['login'])
    return false;
  }
}
