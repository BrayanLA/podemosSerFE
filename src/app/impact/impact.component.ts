import { Component } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent {

  imagenesMarzo2021:String[] = ["../../assets/2021-comprimidas/03 Marzo_Jóvenes Iberoamericanos.jpeg","../../assets/2021-comprimidas/03 Marzo_Universidad del Sinú (Montería).jpg"]

  imagenesAgosto2022: string[] = [
    "../../assets/img/Carrousell/2022-comprimidas/08 Agosto_Marea Púrpura (Bogotá).jpg",
    "../../assets/2022-comprimidas/08 Agosto_Marea Púrpura (Barranquilla).jpg",
    "../../assets/2022-comprimidas/08 Agosto_Marea Púrpura (Buenaventura).jpg",
    "../../assets/2022-comprimidas/08 Agosto_Marea Púrpura (Cucuta).jpg"
  ];

  imagenesNoviembre2022: string[] = [
    "../../assets/img/Carrousell/2022-comprimidas/11 Noviembre_Colegio Mayor San bartolomé (2).jpeg",
    "../../assets/img/Carrousell/2022-comprimidas/11 Noviembre_Colegio Mayor San bartolomé (4).jpeg",
    "../../assets/img/Carrousell/2022-comprimidas/11 Noviembre_Colegio Mayor San bartolomé.jpeg",
    "../../assets/img/Carrousell/2022-comprimidas/11 Noviembre_Mentorías KAS.jpg",
    "../../assets/img/Carrousell/2022-comprimidas/11 Noviembre_Premio Dejar Huella (1).jpeg",
    "../../assets/img/Carrousell/2022-comprimidas/11 Noviembre_Premio Dejar Huella (2).jpeg"
  ];

  abril2023: string[] = [
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Marea Púrpura (Bucaramanga).jpg",
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Acción Interna.jpeg",
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Marea Púrpura (Bogotá).jpg",
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Marea Púrpura (Medellín).jpg",
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Marea Púrpura (Tumaco).jpg",
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Ruta País (Mesa técnica - Mocoa 2).jpg",
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Ruta País (Mesa técnica - Mocoa).jpg",
    "../../assets/img/Carrousell/2023-comprimidas/04 Abril_Ruta País (Socialización - Mocoa).jpg"
  ];
  septiembre2023: string[] = [
    "../../assets/img/Carrousell/2023-comprimidas/09 Septiembre_Mesa técnica Villavicencio.jpg",
    "../../assets/img/Carrousell/2023-comprimidas/09 Septiembre_Socialización Villavicencio.jpg",
  ];
  marzo2024: string[] = [
    "../../assets/img/Carrousell/2024-comprimidas/8 marzo_socialización Universidad de Medellín-min.jpeg",
    "../../assets/img/Carrousell/2024-comprimidas/8 marzo_socialización Universidad de Medellín (2)-min.jpeg",
    "../../assets/img/Carrousell/2023-comprimidas/12 Diciembre_Vista Hermosa (1).jpg"
  ];
  imagenesJunio2024: string[] = [
    "../../assets/img/Carrousell/2024-comprimidas/10 junio_socialización Soy Líder-min.jpeg",
    "../../assets/img/Carrousell/2024-comprimidas/10 junio_socialización Soy Líder(2)-min.jpeg",
    "../../assets/img/Carrousell/2024-comprimidas/13 junio_ socialización obra de teatro Amarte Así (2)-min.jpeg"
  ];
  constructor(){}
}
