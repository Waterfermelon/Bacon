import {Component} from '@angular/core';
import {fadeInLeftAnimation} from 'angular-animations';
import {ScrollTriggerDirective} from '../../../../shared/directives/scroll-trigger.directive';

@Component({
  selector: 'app-story',
  imports: [
    ScrollTriggerDirective
  ],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css',
  animations: [fadeInLeftAnimation({anchor: 'enter', delay: 200})]
})
export class StoryComponent {
  public visible = false;
}
