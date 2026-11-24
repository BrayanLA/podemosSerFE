import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

interface GallerySlide {
  src: string;
  alt: string;
  /** ancho / alto de la foto: en escritorio la foto abierta usa esta proporción para verse completa */
  ratio: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  /**
   * Galería de actividades. Escritorio: acordeón (la foto activa se expande).
   * Tablet/móvil: carrusel deslizable con indicadores.
   */
  readonly slides: GallerySlide[] = [
    { src: '../../assets/img/Carrousell/2024-comprimidas/29 abril_programa de mentorías (2) Buga-min.webp', alt: 'Programa de mentorías en Buga, 2024', ratio: 16 / 9 },
    { src: '../../assets/img/2023/04 Abril_Ruta País (Mesa técnica - Mocoa 2).webp', alt: 'Mesa técnica de la Ruta País en Mocoa, 2023', ratio: 4 / 3 },
    { src: '../../assets/img/Carrousell/2021-comprimidas/10 Octubre Socialización Cali (2).webp', alt: 'Socialización en Cali, 2021', ratio: 1600 / 1002 },
    { src: '../../assets/img/Carrousell/2024-comprimidas/10 junio_socialización Soy Líder-min.webp', alt: 'Estudiantes en la socialización Soy Líder, 2024', ratio: 4 / 3 },
    { src: '../../assets/img/CarrousellHome/Carr6.webp', alt: 'Participantes leyendo el libro Podemos Ser', ratio: 3 / 4 },
    { src: '../../assets/img/Carrousell/2024-comprimidas/10 junio_socialización Soy Líder(2)-min.webp', alt: 'Conversatorio de la socialización Soy Líder, 2024', ratio: 4 / 3 },
    { src: '../../assets/img/CarrousellHome/Carr7.webp', alt: 'Mujeres leyendo el libro Podemos Ser', ratio: 4 / 3 },
  ];

  /** Foto expandida en el acordeón de escritorio. */
  active = 2;
  /** Foto visible en el carrusel de tablet/móvil (para los indicadores). */
  current = 0;

  @ViewChild('track') private track?: ElementRef<HTMLElement>;

  private readonly canHover = typeof window !== 'undefined'
    && window.matchMedia?.('(hover: hover) and (min-width: 992px)').matches;
  private readonly reduceMotion = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  select(index: number): void {
    this.active = index;
  }

  /** En escritorio con mouse, la foto se expande al pasar el cursor. */
  hover(index: number): void {
    if (this.canHover) {
      this.active = index;
    }
  }

  /** Actualiza el indicador según la foto centrada en el carrusel. */
  onTrackScroll(): void {
    const el = this.track?.nativeElement;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) {
      return;
    }
    const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0');
    const index = Math.round(el.scrollLeft / step);
    this.current = Math.max(0, Math.min(this.slides.length - 1, index));
  }

  /** Desliza el carrusel hasta la foto indicada (indicadores). */
  goTo(index: number): void {
    const item = this.track?.nativeElement.children[index] as HTMLElement | undefined;
    item?.scrollIntoView({ behavior: this.reduceMotion ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  }
}
