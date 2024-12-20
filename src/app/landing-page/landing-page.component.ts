import { Component } from '@angular/core';
import {ServicesComponent} from './components/services/services.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {StoryComponent} from './components/story/story.component';
import {CustomersComponent} from './components/customers/customers.component';
import {MediaViewerComponent} from './components/media-viewer/media-viewer.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    ServicesComponent,
    AboutUsComponent,
    StoryComponent,
    CustomersComponent,
    MediaViewerComponent,
    ContactPageComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
