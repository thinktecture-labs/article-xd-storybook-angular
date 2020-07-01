import {AppHeaderComponent} from './app-header.component';
import {moduleMetadata} from '@storybook/angular';
import {UserComponent} from '../user/user.component';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

export default {
  title: 'Core / Header',
  decorators: [
    moduleMetadata({
      declarations: [UserComponent],
      imports: [MatRippleModule, MatButtonModule],
    }),
  ],
};

export const Default = () => ({
  component: AppHeaderComponent,
});
