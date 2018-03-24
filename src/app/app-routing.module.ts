import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

/* Components to be imported first inorder to use in paths*/

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService as UserGuard } from './auth/auth.service';



const routes: Routes = [
{
	path: 'login',
	component: LoginComponent,
	data: {
		title: 'Login'
	}
},
{
	path: 'signup',
	component: SignupComponent,
	data: {
		title: 'Signup'
	}
},
{
	path: 'dashboard',
	component: DashboardComponent,
	canActivate: [ UserGuard ],
	data: {
		title: 'Landing'
	}
},
{
	path: 'admin',
	component: AdminComponent,
	data: {
		title: 'admin'
	}
},
{
	path: '**',
	component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
