import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabwebComponent } from './labweb/labweb.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { SesionGuard } from './sesion.guard';

const routes: Routes = [
	{ path: 'rutita', component: LabwebComponent , canActivate: [SesionGuard]},
	{ path: 'panel' , component:PanelComponent ,canActivate: [SesionGuard]},
	{ path: 'inicio', component: LoginComponent },
	{ path: '', component: LoginComponent }
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
