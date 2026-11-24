import { Component } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

const SLIDE_TIMING = '450ms cubic-bezier(0.35, 0, 0.25, 1)';

/**
 * Las páginas se comportan como paneles puestos en fila horizontal: la actual
 * sale por un lado mientras la nueva entra por el otro, pegadas (sin hueco).
 * `direction` = 1 avanza (todo se mueve a la izquierda), -1 retrocede.
 */
const slide = (direction: 1 | -1) => [
  query(':enter', style({ transform: `translateX(${direction * 100}%)` }), { optional: true }),
  group([
    query(':leave', animate(SLIDE_TIMING, style({ transform: `translateX(${-direction * 100}%)` })), { optional: true }),
    query(':enter', animate(SLIDE_TIMING, style({ transform: 'translateX(0)' })), { optional: true }),
  ]),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeSlide', [
      transition(':increment', slide(1)),
      transition(':decrement', slide(-1)),
    ])
  ]
})
export class AppComponent {
  /** Respeta la preferencia del sistema de reducir movimiento: navega sin animación. */
  readonly reduceMotion = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  getState(outlet: RouterOutlet): number | undefined {
    return outlet?.isActivated ? outlet.activatedRouteData['order'] : undefined;
  }
}
