import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-first-step',
  imports: [],
  templateUrl: './first-step.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FirstStepComponent { }
