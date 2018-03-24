import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean {
  	console.log(localStorage.getItem('userDetails'));
  	if(localStorage.getItem('userDetails') !== null && localStorage.getItem('userDetails') !== undefined) {
  		return true;
  	}
  	else {
  		this.router.navigate(['login']);
  		return false;
  	}
  }

}
