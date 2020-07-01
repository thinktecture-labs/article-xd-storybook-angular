import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {CardComponent} from '../card/card.component';
import {moduleMetadata} from '@storybook/angular';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListContentComponent} from './list-content.component';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

export default {
  title: 'Core / Content / List',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [ListContentComponent, CardComponent],
      imports: [MatRippleModule, MatButtonModule, BrowserAnimationsModule, FormsModule, MatCheckboxModule],
    }),
  ],
};

export const Default = () => ({
  template: `
    <labs-card [show]="show" >
        <labs-list-content [icon]="icon" [title]="title" [items]="items"></labs-list-content>
    </labs-card>
  `,
  props: {
    show: boolean('show', true),
    icon: text('icon', 'fa-tasks'),
    title: text('title', 'Tasks'),
    items: [
      {title: 'Lorem ipsum', checked: true},
      {title: 'Lorem ipsum'},
      {title: 'Lorem ipsum'},
      {title: 'Lorem ipsum'},
    ],
  },
});
