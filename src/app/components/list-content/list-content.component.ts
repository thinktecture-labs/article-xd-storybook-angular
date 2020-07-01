import {Component, Input} from '@angular/core';

@Component({
  selector: 'labs-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss'],
})
export class ListContentComponent {
  @Input()
  icon: string;
  @Input()
  title: string;
  @Input()
  items: {title: string, checked: boolean}[]
}
