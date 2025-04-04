import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-website',
  imports: [],
  templateUrl: './website.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WebsiteComponent { }
