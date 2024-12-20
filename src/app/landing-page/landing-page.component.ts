import { Component } from '@angular/core';
import {ServicesComponent} from './components/services/services.component';
import {AboutUsComponent} from './components/about-us/about-us.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    ServicesComponent,
    AboutUsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
