import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'labs-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input()
  url: string;
}
