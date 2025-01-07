import {Component} from '@angular/core';
import {ScrollTriggerDirective} from '../../../../shared/directives/scroll-trigger.directive';
import {fadeInLeftAnimation} from 'angular-animations';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-contact-page',
  imports: [
    ScrollTriggerDirective,
    TranslocoPipe
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  animations: [
    fadeInLeftAnimation({anchor: 'enter', delay: 100}),
  ]
})
export class ContactPageComponent {
  public visible = false;
}
