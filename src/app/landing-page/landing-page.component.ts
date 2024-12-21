import { Component } from '@angular/core';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StoryComponent } from './components/story/story.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MediaViewerComponent } from './components/media-viewer/media-viewer.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import {bounceInUpOnEnterAnimation, fadeInDownAnimation, fadeInDownOnEnterAnimation} from 'angular-animations';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [
    ServicesComponent,
    AboutUsComponent,
    StoryComponent,
    CustomersComponent,
    MediaViewerComponent,
    ContactPageComponent,
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    fadeInDownAnimation(),
    fadeInDownOnEnterAnimation(),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200 }),
  ]
})
export class LandingPageComponent {

  public showTitle: boolean = false;

}
