import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.scss']
})
export class FechasComponent implements OnInit {
  fechasGuardadas = [];
  fechaObjeto = {
    fechaIn: new Date,
    fechaOut: new Date
  }
  constructor() { }

  ngOnInit(): void {
  }

  clickFecha(){
    console.log(this.fechaObjeto);
    if(this.fechaObjeto.fechaIn != undefined && this.fechaObjeto.fechaOut != undefined){
      this.fechasGuardadas.push({
        fechaIn: this.fechaObjeto.fechaIn,
        fechaOut: this.fechaObjeto.fechaOut
      })
      console.log(this.fechasGuardadas);

      /* var day = new Date(this.fechaInput).getDate()
      var dayFinal = new Date(this.fechaFinal).getDate()
      console.log(dayFinal - day); */
    }

  }


}
