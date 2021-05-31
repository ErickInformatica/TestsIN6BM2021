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
    var verificacion = false
    if(this.fechaObjeto.fechaIn != undefined && this.fechaObjeto.fechaOut != undefined){
      for (let i = 0; i < this.fechasGuardadas.length; i++) {
        if(this.fechaObjeto.fechaIn > this.fechasGuardadas[i].fechaIn && this.fechaObjeto.fechaIn < this.fechasGuardadas[i].fechaOut){
          verificacion = true;
        }
      }

      if (verificacion === false) {
        this.fechasGuardadas.push({
          fechaIn: this.fechaObjeto.fechaIn,
          fechaOut: this.fechaObjeto.fechaOut
        })
      } else {
        console.log("No tiene permitido escoger una fecha ya seleccionada");
      }

      console.log(this.fechasGuardadas);

      /* var day = new Date(this.fechaInput).getDate()
      var dayFinal = new Date(this.fechaFinal).getDate()
      console.log(dayFinal - day); */
    }

  }


}
