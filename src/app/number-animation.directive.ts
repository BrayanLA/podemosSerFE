import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNumberAnimation]'
})
export class NumberAnimationDirective implements OnInit {
  @Input('start') start: number = 0;
  @Input('end') end: number = 0;
  @Input('duration') duration: number = 2000;
  @Input('showPlus') showPlus: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.animateValue(this.start, this.end, this.duration);
  }

  animateValue(start: number, end: number, duration: number) {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = start + (end - start) * progress;
      this.renderer.setProperty(this.el.nativeElement, 'textContent', this.formatNumber(current));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.renderer.setProperty(this.el.nativeElement, 'textContent', this.formatNumber(end));
      }
    };

    requestAnimationFrame(step);
  }

  formatNumber(num: number): string {
    const formattedNumber = Math.floor(num).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return this.showPlus ? `+${formattedNumber}` : formattedNumber; // Agrega el signo "+" si showPlus es true
  }
}
