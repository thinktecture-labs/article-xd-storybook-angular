import {DocumentContentComponent} from './document-content.component';
import {moduleMetadata} from '@storybook/angular';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {CardComponent} from '../card/card.component';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
  title: 'Core / Content / Document',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [DocumentContentComponent, CardComponent],
      imports: [MatRippleModule, MatButtonModule, BrowserAnimationsModule],
    }),
  ],
};


export const Default = () => ({
  template: `
    <labs-card [show]="show">
        <labs-document-content [icon]="icon" [identifier]="identifier" [preview]="preview" [title]="title"></labs-document-content>
    </labs-card>
  `,
  props: {
    show: boolean('show', true),
    icon: text('icon', 'fa-file-medical-alt'),
    title: text('title', 'Lorem ipsum'),
    identifier: text('identifier', '2020-07-02#42'),
    preview: text('preview', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd…'),
  },
});


export const Report = () => ({
  template: `
    <labs-card [show]="show">
        <labs-document-content [icon]="icon" [identifier]="identifier" title="title"></labs-document-content>
    </labs-card>
  `,
  props: {
    show: boolean('show', true),
    icon: text('icon', 'fa-file-medical-alt'),
    title: text('title', 'Lorem ipsum'),
    identifier: text('identifier', '2020-07-02#42'),
  },
});
