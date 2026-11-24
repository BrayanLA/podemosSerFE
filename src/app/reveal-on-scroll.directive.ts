import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

/**
 * Agrega la clase `reveal` al elemento y, cuando entra en pantalla, `is-visible`
 * (una sola vez). El CSS define la animación de entrada para cada componente
 * que la use (p. ej. `.styled-title` en styles.css).
 * Si el usuario prefiere reducir movimiento, el elemento se muestra de inmediato.
 * `revealThreshold`: fracción del elemento que debe verse para activarse (0–1).
 */
@Directive({
  selector: '[appRevealOnScroll]'
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input() revealThreshold = 0.6;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnInit(): void {
    const element = this.el.nativeElement;
    this.renderer.addClass(element, 'reveal');

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        this.renderer.addClass(element, 'is-visible');
        this.observer?.disconnect();
      }
    }, { threshold: this.revealThreshold });
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
