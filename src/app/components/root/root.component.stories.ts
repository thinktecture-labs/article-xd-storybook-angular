import {RootComponent} from './root.component';
import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MeasureContentComponent} from '../measure-content/measure-content.component';
import {AppHeaderComponent} from '../app-header/app-header.component';
import {BackgroundComponent} from '../background/background.component';
import {UserComponent} from '../user/user.component';
import {MatButtonModule} from '@angular/material/button';
import {CardComponent} from '../card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DocumentContentComponent} from '../document-content/document-content.component';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ListContentComponent} from '../list-content/list-content.component';
import {FileTreeComponent} from '../file-tree/file-tree.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {APP_BASE_HREF} from '@angular/common';
import {DetailsComponent} from '../details/details.component';
import {TaskService} from '../../services/task.service';
import {of} from 'rxjs';

const tasks = [
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', checked: true},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
  {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
];

export default {
  title: 'Demo',
  decorators: [
    withKnobs,
    moduleMetadata({
      declarations: [
        DocumentContentComponent,
        BackgroundComponent,
        AppHeaderComponent,
        MeasureContentComponent,
        UserComponent,
        CardComponent,
        ListContentComponent,
        FileTreeComponent,
        DashboardComponent,
        DetailsComponent,
      ],
      imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        RouterModule.forRoot([
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
          {
            path: 'dashboard', component: DashboardComponent, children: [
              {path: ':id', component: DetailsComponent},
            ],
          },
        ], {useHash: true}),
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: TaskService, useValue: {
            getAllTasks: () => of(tasks),
          },
        },
      ],
    }),
  ],
};

export const Default = () => ({
  component: RootComponent,
});
