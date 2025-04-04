import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './sidemenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {

  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {
    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':') )
    // console.log(dashboardRoutes);
  }
}
