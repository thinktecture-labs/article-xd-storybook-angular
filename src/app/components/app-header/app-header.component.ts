import {Component} from '@angular/core';
import {USER_IMAGE_URL} from '../../models/demo';

@Component({
  selector: 'labs-app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.scss'],
})
export class AppHeaderComponent {
  USER_IMAGE_URL = USER_IMAGE_URL;

}
