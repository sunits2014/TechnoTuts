import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public route: Router) { }

  canActivate() {
    let loggedIn = JSON.parse(localStorage.getItem('currentUser'));
    if(loggedIn.name == "" || loggedIn.password == "") {
      this.route.navigate(['']);
    }
    return true
  }

}
