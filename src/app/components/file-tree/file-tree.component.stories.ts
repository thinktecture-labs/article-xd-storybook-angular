import {FileTreeComponent} from './file-tree.component';
import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import {MatRippleModule} from '@angular/material/core';

export default {
  title: 'Core | File Tree',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MatRippleModule],
    }),
  ],
};

export const Default = () => ({
  component: FileTreeComponent,
});
