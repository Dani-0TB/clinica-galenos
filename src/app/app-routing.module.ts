import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent, UsuariosComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: "",
    redirectTo:"auth",
    pathMatch:"full"
  },
  {
    path:"atenciones",
    loadChildren: () => import('./atenciones/atenciones.module').then( m => m.AtencionesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'usuarios', component: UsuariosComponent },
    // ...
 ]},
 // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
