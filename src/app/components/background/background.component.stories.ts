import {BackgroundComponent} from './background.component';

export default {
  title: 'Core / Background',
};

export const Default = () => ({
  component: BackgroundComponent,
  props: {
    source: 'assets/space.mp4',
  },
});
