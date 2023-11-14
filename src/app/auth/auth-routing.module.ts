import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AtencionesComponent } from '../atenciones/atenciones.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'login'
  },
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path: 'register',
    pathMatch:'full',
    component: RegisterComponent
  },
  {
    path: 'atenciones',
    pathMatch:'full',
    component: AtencionesComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
