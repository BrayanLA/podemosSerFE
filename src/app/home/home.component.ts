import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.slidesPlugin();
  }
  slidesPlugin(activeSlide: number = 2): void {
    const slides = document.querySelectorAll(".slide");

    (slides[activeSlide] as HTMLElement).classList.add("active");

    for (const slide of Array.from(slides)) {
      slide.addEventListener("click", () => {
        this.clearActiveClasses(slides);
        slide.classList.add("active");
      });
    }
  }

  clearActiveClasses(slides: NodeListOf<Element>): void {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
  tooltipVisible = false;
  tooltipX = 0;
  tooltipY = 0;

  onMouseMove(event: MouseEvent): void {
    this.tooltipX = event.clientX;
    this.tooltipY = event.clientY;
    this.tooltipVisible = true;
  }

  hideTooltip(): void {
    this.tooltipVisible = false;
  }


}
