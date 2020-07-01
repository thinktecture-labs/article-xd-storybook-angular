import {moduleMetadata} from '@storybook/angular';
import {MatRippleModule} from '@angular/material/core';
import {MeasureContentComponent} from './measure-content.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {number, text, withKnobs} from '@storybook/addon-knobs';

export default {
  title: 'Core / Content / Measure',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MatRippleModule, MatProgressSpinnerModule],
    }),
  ],
};

export const Default = () => ({
  component: MeasureContentComponent,
  props: {
    title: text('title', 'Lorem ipsum'),
    value: number('value', 42),
  },
});
