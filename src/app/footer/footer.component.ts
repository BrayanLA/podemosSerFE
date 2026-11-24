import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type TooltipType = 'success' | 'warning' | 'error';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnDestroy {

  email: string = '';
  message: string | null = null;
  tooltipClass: string = '';
  private apiUrl = 'https://podemosser.com/enviar-correo';
  private readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private hideTimer?: ReturnType<typeof setTimeout>;

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) { }

  subscribe(): void {
    const email = this.email.trim();
    if (!this.emailPattern.test(email)) {
      this.showMessage('Por favor, ingresa un correo electrónico válido.', 'warning');
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, date: new Date().toISOString() };

    this.http.post(this.apiUrl, body, { headers, observe: 'response', responseType: 'text' }).subscribe({
      next: response => {
        if (response.ok) {
          this.showMessage('¡Gracias por suscribirte! Pronto recibirás nuestras novedades.', 'success');
        }
      },
      error: error => {
        if (error.status === 409) {
          this.showMessage('Parece que ya te has suscrito antes. ¡Gracias por formar parte de nuestra comunidad!', 'warning');
        } else {
          this.showMessage('Hubo un problema con tu suscripción. Por favor, inténtalo de nuevo más tarde.', 'error');
        }
      }
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.hideTimer);
  }

  /** Muestra el tooltip de respuesta y lo oculta a los 5 segundos. */
  private showMessage(text: string, type: TooltipType): void {
    this.message = text;
    this.tooltipClass = `show-tooltip ${type}`;
    this.cd.markForCheck();

    clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(() => {
      this.message = null;
      this.tooltipClass = '';
      this.cd.markForCheck();
    }, 5000);
  }
}
