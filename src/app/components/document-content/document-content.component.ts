import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'labs-document-content',
  templateUrl: 'document-content.component.html',
  styleUrls: ['document-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentContentComponent {
  @Input()
  icon: string;
  @Input()
  title: string;
  @Input()
  identifier: string;
  @Input()
  preview: string;
}
