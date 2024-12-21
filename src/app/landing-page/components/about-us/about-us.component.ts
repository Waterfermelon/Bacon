import {Component} from '@angular/core';
import {bounceInUpOnEnterAnimation} from 'angular-animations';
import {ScrollTriggerDirective} from '../../../../shared/directives/scroll-trigger.directive';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [
    ScrollTriggerDirective,
    NgIf,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  animations: [
    bounceInUpOnEnterAnimation({anchor: 'enter3', delay: 200}),
  ]
})
export class AboutUsComponent {

  public visible = false;

}
