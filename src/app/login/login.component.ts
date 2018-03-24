import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login(username, password) {
  	if(username !== null && username.length !== 0 && username !== undefined) {
  		if(password !== null && password.length !== 0 && password !== undefined) {
  			alert('user auth success');
  			localStorage.setItem('userDetails', username);
  			this.router.navigate(['dashboard']);
  		}else {
  			alert('Enter the password')
  		}
  	}else {
  		alert('Enter the username');
  	}
  }

  public gotoSignup() {
  	this.router.navigate(['signup']);
  }	

}
