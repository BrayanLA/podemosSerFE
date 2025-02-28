import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email: string = '';
  message: string | null = null;
  tooltipClass: string = '';  // Cambiamos de tooltipType a tooltipClass
  private apiUrl = 'https://podemosser.com/enviar-correo';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  subscribe() {
    if (this.email) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = { email: this.email, date: new Date().toISOString() };

      this.http.post(this.apiUrl, body, { headers: headers, observe: 'response', responseType: 'text' }).subscribe(
        response => {
          console.log("Respuesta recibida:", response); // Verifica toda la respuesta
          if (response.status === 201) {
            this.message = '¡Gracias por suscribirte! Pronto recibirás nuestras novedades.';
            this.tooltipClass = 'show-tooltip success';
          } else {
            console.log("Código de estado inesperado:", response.status); // Manejo de códigos no esperados
          }
        },
        error => {
          console.log("Error recibido:", error); // Verifica el error completo
          if (error.status === 409) { // Maneja el conflicto aquí
            this.message = 'Parece que ya te has suscrito antes. ¡Gracias por formar parte de nuestra comunidad!';
            this.tooltipClass = 'show-tooltip warning';
          } else {
            this.message = 'Hubo un problema con tu suscripción. Por favor, inténtalo de nuevo más tarde.';
            this.tooltipClass = 'show-tooltip error';
          }
        }
      );
    } else {
      console.log("No se ingresó un correo electrónico");
      this.message = 'Por favor, ingresa un correo electrónico válido.';
      this.tooltipClass = 'show-tooltip warning';
    }

    setTimeout(() => {
      this.message = null;
      this.tooltipClass = '';
    }, 5000);
  }

}


