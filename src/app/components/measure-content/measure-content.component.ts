import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'labs-measure-content',
  templateUrl: 'measure-content.component.html',
  styleUrls: ['measure-content.component.scss'],
  host: {
    '[class.labs-left-corner]': 'cornerMarker === "left"',
    '[class.labs-right-corner]': 'cornerMarker === "right"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeasureContentComponent {
  @Input()
  title: string;
  @Input()
  value: number;
  @Input()
  fix: boolean;
}
