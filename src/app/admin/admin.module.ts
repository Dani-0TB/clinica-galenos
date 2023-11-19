import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin_site/admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [AdminComponent, UsuariosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
