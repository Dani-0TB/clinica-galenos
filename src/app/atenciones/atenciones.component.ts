import { Component } from '@angular/core';


interface FormField {
  valor: string,
  valorVista: string
}

@Component({
  selector: 'app-atenciones',
  templateUrl: './atenciones.component.html',
  styleUrls: ['./atenciones.component.scss'],
})
export class AtencionesComponent {
  
  especialidad: string = "";
  medico: string = "";
  busqueda = false;

  especialidades: FormField[] = [
    {valor: 'general', valorVista:'Medicina General'},
    {valor: 'kine', valorVista:'Kinesiología'},
    {valor: 'nutri', valorVista:'Nutrición'},
    {valor: 'obste', valorVista:'Obstetricia'},
    {valor: 'trauma', valorVista:'Traumatología'},
  ]
  medicos: FormField[] = [
    {valor: '1', valorVista:'Alexandra Bustamante'},
    {valor: '2', valorVista:'Alejandro Noguera'},
    {valor: '3', valorVista:'Benjamín Lopez'},
    {valor: '4', valorVista:'Jocelyn Catalán'},
    {valor: '5', valorVista:'Katarina Diaz'},
  ]

  buscar() {
    this.busqueda = true;
  }
}

