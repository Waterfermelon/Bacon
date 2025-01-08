import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {fadeInRightAnimation} from 'angular-animations';
import {ScrollTriggerDirective} from '../../../../shared/directives/scroll-trigger.directive';
import {TranslocoPipe} from '@jsverse/transloco';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [
    ScrollTriggerDirective,
    TranslocoPipe,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations: [
    fadeInRightAnimation({anchor: 'enter'})
  ]
})
export class ServicesComponent implements AfterViewInit, OnDestroy{
  public visible = false;

  private scrollInterval: any;

  ngAfterViewInit() {
    const container = document.getElementById('services-card-container');
    if (container) {
      this.scrollInterval = setInterval(() => {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 2500);
    }
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}
