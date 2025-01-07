import {Component, HostListener, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TranslocoPipe, TranslocoService} from '@jsverse/transloco';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet,
    TranslocoPipe,
    NgIf
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent{

  private translocoService = inject(TranslocoService);

  public showLangPopup = false;
  public navBarItems = [
    {label: 'navBar.home', link: '#start'},
    {label: 'navBar.services', link: '#services'},
    {label: 'navBar.clients', link: '#customers'},
    {label: 'navBar.portfolio', link: '#portfolio'},
    {label: 'navBar.contact', link: '#contact'},
  ]

  scrollToSection(event: Event, sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element){
      event.preventDefault();
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  onClickLangPopUp() {
    this.showLangPopup = !this.showLangPopup;
  }

  onChangeLang(lang: string){
    this.translocoService.setActiveLang(lang);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('#langPopup');
    if (!clickedInside) {
      this.showLangPopup = false;
    }
  }
}
