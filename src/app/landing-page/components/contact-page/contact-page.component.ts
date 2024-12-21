import {Component} from '@angular/core';
import {ScrollTriggerDirective} from '../../../../shared/directives/scroll-trigger.directive';
import {fadeInLeftAnimation} from 'angular-animations';

@Component({
  selector: 'app-contact-page',
  imports: [
    ScrollTriggerDirective
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
