import {CardComponent} from './card.component';
import {moduleMetadata} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {MatRippleModule} from '@angular/material/core';

export default {
  title: 'Core / Card',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [CardComponent],
      imports: [BrowserAnimationsModule, MatRippleModule],
    }),
  ],
};

export const Default = () => ({
  template: `
    <labs-card [show]="show">
        Content Content <br>
        Content Content <br>
        Content Content <br>
        Content Content <br>
</labs-card>
  `,
  props: {
    show: boolean('show', true),
  },
});

export const Large = () => ({
  template: `
    <labs-card [show]="show">
        Content Content Content Content Content Content Content Content <br>
        Content Content Content Content Content Content Content Content <br>
        Content Content Content Content Content Content Content Content <br>
        Content Content Content Content Content Content Content Content <br>
        Content Content Content Content Content Content Content Content <br>
</labs-card>
  `,
  props: {
    show: boolean('show', true),
  },
});

