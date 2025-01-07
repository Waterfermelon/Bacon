import {Component} from '@angular/core';
import {fadeInRightAnimation} from 'angular-animations';
import {ScrollTriggerDirective} from '../../../../shared/directives/scroll-trigger.directive';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-services',
  imports: [
    ScrollTriggerDirective,
    TranslocoPipe
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations: [
    fadeInRightAnimation({anchor: 'enter'})
  ]
})
export class ServicesComponent {
  public visible = false;
}
