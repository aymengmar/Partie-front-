import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GestionUserService } from '../service/gestion-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private UserSERVICE:GestionUserService ,  private router: Router){
     
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,rejects)=>{
      if (this.UserSERVICE.LoggedIn()==true){
        resolve(true)
      }
      else{
        //return page and queryParams
        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
        resolve(false)
      }
    })
  }
  
}
