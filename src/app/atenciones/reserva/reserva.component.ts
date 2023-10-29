import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent {
  mes = [
    [ {num:1, disponible:false},
      {num:2, disponible:false},
      {num:3, disponible:false},
      {num:4, disponible:false},
      {num:5, disponible:false},
      {num:6, disponible:false},
      {num:7, disponible:false},],
    [ {num:8, disponible:false},
      {num:9, disponible:false},
      {num:10, disponible:true},
      {num:11, disponible:true},
      {num:12, disponible:false},
      {num:13, disponible:false},
      {num:14, disponible:false},],
    [ {num:15, disponible:true},
      {num:16, disponible:true},
      {num:17, disponible:false},
      {num:18, disponible:false},
      {num:19, disponible:false},
      {num:20, disponible:false},
      {num:21, disponible:false},],
    [ {num:22, disponible:true},
      {num:23, disponible:true},
      {num:24, disponible:true},
      {num:25, disponible:true},
      {num:26, disponible:true},
      {num:27, disponible:true},
      {num:28, disponible:true},],
    [ {num:29, disponible:true},
      {num:30, disponible:true},
      {num:1, disponible:true},
      {num:2, disponible:true},
      {num:3, disponible:true},
      {num:4, disponible:true},
      {num:5, disponible:true},]
  ]
}
