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
  private apiUrl = 'http://localhost:8080/enviar-correo';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  subscribe() {
    if (this.email) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = { email: this.email, date: new Date().toISOString() };
      this.http.post(this.apiUrl, body, { headers: headers }).subscribe(
        response => {
          console.log('Subscription successful', response);
          // Aquí puedes manejar una respuesta exitosa, como mostrar un mensaje al usuario.
        },
        error => {
          console.error('Subscription failed', error);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario.
        }
      );
    } else {
      console.error('Email is required');
    }
  }
}
