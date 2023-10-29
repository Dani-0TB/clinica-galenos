import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo:"atenciones",
    pathMatch:"full"
  },
  {
    path:"atenciones",
    loadChildren: () => import('./atenciones/atenciones.module').then( m => m.AtencionesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
