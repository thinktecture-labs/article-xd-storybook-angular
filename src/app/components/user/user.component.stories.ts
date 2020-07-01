import {UserComponent} from './user.component';
import {USER_IMAGE_URL} from '../../models/demo';

export default {
  title: 'Core / User',
};

export const Default = () => ({
  component: UserComponent,
  props: {
    url: USER_IMAGE_URL,
  },
});
