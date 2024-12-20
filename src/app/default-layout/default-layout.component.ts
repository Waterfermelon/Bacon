import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent{

  public navBarItems = [
    {label: 'Inicio', link: '#start'},
    {label: 'Servicios', link: '#services'},
    {label: 'Clientes', link: '#customers'},
    {label: 'Portafolio', link: '#portfolio'},
    {label: 'Contacto', link: '#contact'},
  ]

  scrollToSection(event: Event, sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element){
      event.preventDefault();
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
