import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-customers',
  imports: [
    TranslocoPipe
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements AfterViewInit, OnDestroy{

  public cusotmerLogos: string[] = [
    'logo_acero.png',
    'logo_agnico.png',
    'logo_besthal.png',
    'logo_boxtool.png',
    'logo_carnero.png',
    'logo_circlek.png',
    'logo_citibanamex.png',
    'logo_convegas.png',
    'logo_eps.png',
    'logo_experiencias.png',
    'logo_imss.png',
    'logo_kalisch.png',
    'logo_mcdonalds.png',
    'logo_mega.png',
    'logo_mitchell.png',
    'logo_san_francisco.png',
    'logo_supply.png',
    'logo_syncro.png'
  ]

  private scrollInterval: any;

  ngAfterViewInit() {
    const container = document.getElementById('customer-logos-container');
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
