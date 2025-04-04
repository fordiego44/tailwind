import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'first-step',
        title: 'Primeros pasos',
        loadComponent: () => import('./dashboard/pages/first-step/first-step.component'),
      },
      {
        path: 'spiderman',
        title: 'Spiderman',
        loadComponent: () => import('./dashboard/pages/spiderman/spiderman.component'),
      },
      {
        path: 'flexbox',
        title: 'Flexbox',
        loadComponent: () => import('./dashboard/pages/flexbox/flexbox.component'),
      },
      {
        path: 'position',
        title: 'Position',
        loadComponent: () => import('./dashboard/pages/position/position.component'),
      },
      {
        path: 'pseudoclases',
        title: 'Pseudoclases',
        loadComponent: () => import('./dashboard/pages/pseudoclases/pseudoclases.component'),
      },
      {
        path: 'layout',
        title: 'Layout',
        loadComponent: () => import('./dashboard/pages/layout/layout.component'),
      },
      {
        path: 'grid',
        title: 'Grid',
        loadComponent: () => import('./dashboard/pages/grid/grid.component'),
      },
      {
        path: 'landing',
        title: 'Landing',
        loadComponent: () => import('./dashboard/pages/landing/landing.component'),
      },
      {
        path: 'formulario',
        title: 'Formulario',
        loadComponent: () => import('./dashboard/pages/formulario/formulario.component'),
      },
      {
        path: 'website',
        title: 'Website',
        loadComponent: () => import('./dashboard/pages/website/website.component'),
      },
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component'),
      },
      {
        path: '**',
        redirectTo: 'first-step',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },


];
