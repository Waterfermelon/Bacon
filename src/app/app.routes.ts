import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./landing-page/landing-page.component').then(m => m.LandingPageComponent)
      }
    ]
  }
];
