import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]'
})
export class ScrollTriggerDirective implements OnInit {

  @Output() visible = new EventEmitter<void>();
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.visible.emit();
          this.observer.disconnect(); // Stop observing after the element is visible
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

}
