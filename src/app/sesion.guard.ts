import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean {
    console.log('Session Guard invocada');
    return true;
  }
}
