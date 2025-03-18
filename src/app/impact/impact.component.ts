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
  imagenesJulio2024: string[] = [
    "../../assets/2024-comprimidas/30_julio_reunion_secretaria_mujer_equidad_genero_gobernacion_atlantico.jpg",
    "../../assets/2024-comprimidas/31_julio_reunion_secretaria_mujer_equidad_genero_alcaldia_barranquilla.jpeg"
  ];
  imagenesSeptiembre2024: string[] = [
    "../../assets/2024-comprimidas/21 septiembre_Mujeres que inspiran_Testimonio Cindy Tatiana Angulo.jpg"
  ];
  imagenesOctubre2024: string[] = [
    "../../assets/2024-comprimidas/18 octubre_Mesa técnica por la promoción del liderazgo y la autonomía económica de las mujeres en Casanare.JPG",
    "../../assets/2024-comprimidas/18 octubre_Mesa técnica por la promoción del liderazgo y la autonomía económica de las mujeres en Casanare (2).jpg",
    "../../assets/2024-comprimidas/24 octubre_Transferencia metodológica con la Gobernación del Atlántico.jpg",
    "../../assets/2024-comprimidas/24 octubre_Transferencia metodológica con la Gobernación del Atlántico (2).jpg",
    "../../assets/2024-comprimidas/25 octubre_programa de formación con la Gobernación del Atlántico.jpg",
    "../../assets/2024-comprimidas/25 octubre_programa de formación con la Gobernación del Atlántico (2).JPG",
  ];
  imagenesNoviembre2024: string[] = [
    "../../assets/2024-comprimidas/4 noviembre_60 años KAS Colombia.jpg",
    "../../assets/2024-comprimidas/7 noviembre_programa de mentorías en Barranca de Upía.JPG",
    "../../assets/2024-comprimidas/8 noviembre_programa de mentorías en Buenaventura.jpg",
    "../../assets/2024-comprimidas/17 de noviembre_programa de mentorías con la Gobernación de Casanare.jpg",
    "../../assets/2024-comprimidas/17 de noviembre_programa de mentorías con la Gobernación de Casanare (2).jpg",
    "../../assets/2024-comprimidas/17 de noviembre_programa de mentorías con la Gobernación de Casanare (3).JPG",
    "../../assets/2024-comprimidas/25 noviembre_Día de la No Violencia contra la Mujer en Buga.jpeg",
  ];
  imagenesDiciembre2024: string[] = [
    "../../assets/2024-comprimidas/2 diciembre_Podemos ser por Venezuela.jpg"
  ];
  imagenesFebrero2025: string[] = [
    "../../assets/2025-comprimidas/25 febrero_Cumbre de Mandatarias por la Igualdad.jpeg"
  ];
  imagenesMarzo2025: string[] = [
    "../../assets/2025-comprimidas/7 marzo_Conmemoración 8M en Galapa.jpg",
    "../../assets/2025-comprimidas/7 marzo_Desayuno de Poderosas.jpg",
    "../../assets/2025-comprimidas/10 marzo_Conmemoración 8M en Tarso.jpg",
    "../../assets/2025-comprimidas/12 marzo_Podemos Ser en Mastercard.jpg",
    "../../assets/2025-comprimidas/12 marzo_VII Festival Literario de Mujeres.jpg",
  ];
  constructor(){}
}
