import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {
  datosCiudades = [{"id":1,"Ciudades":"Huineno","Calificacion":55},
  {"id":2,"Ciudades":"Kawasaki","Calificacion":74},
  {"id":3,"Ciudades":"Salavat","Calificacion":99},
  {"id":4,"Ciudades":"Aguiar da Beira","Calificacion":69},
  {"id":5,"Ciudades":"Linoan","Calificacion":36},
  {"id":6,"Ciudades":"Krasnyy Luch","Calificacion":100},
  {"id":7,"Ciudades":"Ołpiny","Calificacion":1},
  {"id":8,"Ciudades":"Francisco Villa","Calificacion":36},
  {"id":9,"Ciudades":"Gondomar","Calificacion":2},
  {"id":10,"Ciudades":"Socos","Calificacion":34},
  {"id":11,"Ciudades":"Novyy Oskol","Calificacion":28},
  {"id":12,"Ciudades":"Naberezhnyye Chelny","Calificacion":73},
  {"id":13,"Ciudades":"Cowansville","Calificacion":15},
  {"id":14,"Ciudades":"Oudtshoorn","Calificacion":8},
  {"id":15,"Ciudades":"Hadāli","Calificacion":19},
  {"id":16,"Ciudades":"Hadayang","Calificacion":98},
  {"id":17,"Ciudades":"Hekou","Calificacion":6},
  {"id":18,"Ciudades":"Bangjun","Calificacion":20},
  {"id":19,"Ciudades":"Zagnitkiv","Calificacion":57},
  {"id":20,"Ciudades":"Itéa","Calificacion":20},
  {"id":21,"Ciudades":"Mariestad","Calificacion":44},
  {"id":22,"Ciudades":"Longtou’an","Calificacion":43},
  {"id":23,"Ciudades":"Viga","Calificacion":38},
  {"id":24,"Ciudades":"Cloyne","Calificacion":86},
  {"id":25,"Ciudades":"Yiqi","Calificacion":91},
  {"id":26,"Ciudades":"Aengceleng","Calificacion":71},
  {"id":27,"Ciudades":"Tobias Fornier","Calificacion":100},
  {"id":28,"Ciudades":"Przodkowo","Calificacion":20},
  {"id":29,"Ciudades":"Arras","Calificacion":98},
  {"id":30,"Ciudades":"Gusong","Calificacion":35},
  {"id":31,"Ciudades":"Goléré","Calificacion":73},
  {"id":32,"Ciudades":"Caburan","Calificacion":9},
  {"id":33,"Ciudades":"Patique","Calificacion":46},
  {"id":34,"Ciudades":"Katsuura","Calificacion":7},
  {"id":35,"Ciudades":"Sukamanah","Calificacion":80},
  {"id":36,"Ciudades":"San José","Calificacion":43},
  {"id":37,"Ciudades":"Intendente Alvear","Calificacion":68},
  {"id":38,"Ciudades":"Espírito Santo do Pinhal","Calificacion":93},
  {"id":39,"Ciudades":"Primorsko-Akhtarsk","Calificacion":31},
  {"id":40,"Ciudades":"Pomerode","Calificacion":99},
  {"id":41,"Ciudades":"Leran Kulon","Calificacion":75},
  {"id":42,"Ciudades":"Lawepakam","Calificacion":87},
  {"id":43,"Ciudades":"Shuqiao","Calificacion":22},
  {"id":44,"Ciudades":"Boliney","Calificacion":12},
  {"id":45,"Ciudades":"Tuymazy","Calificacion":80},
  {"id":46,"Ciudades":"Almargem do Bispo","Calificacion":76},
  {"id":47,"Ciudades":"Las Cruces","Calificacion":25},
  {"id":48,"Ciudades":"Nanwai","Calificacion":25},
  {"id":49,"Ciudades":"Ambalavao","Calificacion":7},
  {"id":50,"Ciudades":"Fuyang","Calificacion":20},
  {"id":51,"Ciudades":"Bobadela","Calificacion":34},
  {"id":52,"Ciudades":"Obollo-Afor","Calificacion":75},
  {"id":53,"Ciudades":"Jiuxian","Calificacion":27},
  {"id":54,"Ciudades":"Svenljunga","Calificacion":59},
  {"id":55,"Ciudades":"Dongtai","Calificacion":15},
  {"id":56,"Ciudades":"Trogan Barat","Calificacion":85},
  {"id":57,"Ciudades":"San Antonio Suchitepéquez","Calificacion":60},
  {"id":58,"Ciudades":"Puputan","Calificacion":71},
  {"id":59,"Ciudades":"Fujisawa","Calificacion":89},
  {"id":60,"Ciudades":"Sidayu","Calificacion":25},
  {"id":61,"Ciudades":"Náklo","Calificacion":56},
  {"id":62,"Ciudades":"Marly","Calificacion":67},
  {"id":63,"Ciudades":"Xiashe","Calificacion":96},
  {"id":64,"Ciudades":"Pindamonhangaba","Calificacion":72},
  {"id":65,"Ciudades":"Marseille","Calificacion":41},
  {"id":66,"Ciudades":"Lëbushë","Calificacion":90},
  {"id":67,"Ciudades":"Phunphin","Calificacion":22},
  {"id":68,"Ciudades":"Kotingnatagete","Calificacion":49},
  {"id":69,"Ciudades":"Đắk Hà","Calificacion":68},
  {"id":70,"Ciudades":"Ojo de Agua","Calificacion":11},
  {"id":71,"Ciudades":"Xiong’erzhai","Calificacion":36},
  {"id":72,"Ciudades":"Lyon","Calificacion":42},
  {"id":73,"Ciudades":"Prado","Calificacion":46},
  {"id":74,"Ciudades":"Oji River","Calificacion":59},
  {"id":75,"Ciudades":"Clarines","Calificacion":61},
  {"id":76,"Ciudades":"Magang","Calificacion":82},
  {"id":77,"Ciudades":"Lukou","Calificacion":96},
  {"id":78,"Ciudades":"Mbocayaty","Calificacion":96},
  {"id":79,"Ciudades":"Esperanza","Calificacion":62},
  {"id":80,"Ciudades":"Cigadog Hilir","Calificacion":34},
  {"id":81,"Ciudades":"Tanggungrejo","Calificacion":62},
  {"id":82,"Ciudades":"Oslo","Calificacion":17},
  {"id":83,"Ciudades":"Quán Hàu","Calificacion":64},
  {"id":84,"Ciudades":"Gempolan Wetan","Calificacion":21},
  {"id":85,"Ciudades":"Weton","Calificacion":40},
  {"id":86,"Ciudades":"Árta","Calificacion":82},
  {"id":87,"Ciudades":"Juan Santiago","Calificacion":92},
  {"id":88,"Ciudades":"Distracción","Calificacion":96},
  {"id":89,"Ciudades":"Murcia","Calificacion":72},
  {"id":90,"Ciudades":"Foros do Trapo","Calificacion":82},
  {"id":91,"Ciudades":"Alajuela","Calificacion":74},
  {"id":92,"Ciudades":"Tarbes","Calificacion":45},
  {"id":93,"Ciudades":"Borehbangle","Calificacion":68},
  {"id":94,"Ciudades":"Uusikaupunki","Calificacion":6},
  {"id":95,"Ciudades":"Şabbūrah","Calificacion":95},
  {"id":96,"Ciudades":"Maragogipe","Calificacion":14},
  {"id":97,"Ciudades":"Jurh","Calificacion":47},
  {"id":98,"Ciudades":"Maofan","Calificacion":33},
  {"id":99,"Ciudades":"Changtang","Calificacion":26},
  {"id":100,"Ciudades":"Or Yehuda","Calificacion":51}]
  chartInicial = 'pie';

  chartTypes = [
    { nombreTipo: "line", texto: 'Lineas' },
    { nombreTipo: "pie", texto: 'Circular'},
    {nombreTipo: "bar", texto: 'Barras'}
  ]


  chartOptions = {
    responsive: true,
  };
  chartLabels = [];
  chartData = [];
  chartColors = [{
    borderColor: [],
    backgroundColor: []
  }];
  chartLegend = true;
  chartPlugins = [];

  constructor() { }

  ngOnInit(): void {
    this.datosCiudades.forEach(datos => {
      this.chartData.push(datos.Calificacion);
      this.chartLabels.push(datos.Ciudades)
      this.chartColors[0].borderColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`)
      this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    });
  }

}
