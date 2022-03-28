import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppAuthService } from './app-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppGuardGuard implements CanActivate {
  constructor(private _appAuthService: AppAuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = this._appAuthService.getSession();
    if (!token) {
      return false;
    }

    return true;
  }
}
