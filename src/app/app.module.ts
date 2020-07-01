import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {RootComponent} from './components/root/root.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MeasureContentComponent} from './components/measure-content/measure-content.component';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DocumentContentComponent} from './components/document-content/document-content.component';
import {ListContentComponent} from './components/list-content/list-content.component';
import {FileTreeComponent} from './components/file-tree/file-tree.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DetailsComponent} from './components/details/details.component';
import {CardComponent} from './components/card/card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {UserComponent} from './components/user/user.component';
import {BackgroundComponent} from './components/background/background.component';
import {TaskService} from './services/task.service';
import {of} from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    RootComponent,
    DocumentContentComponent,
    MeasureContentComponent,
    ListContentComponent,
    FileTreeComponent,
    DashboardComponent,
    CardComponent,
    DetailsComponent,
    AppHeaderComponent,
    UserComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [{
    provide: TaskService, useValue: {
      getAllTasks: () => of([
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', checked: true},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
        {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
      ]),
    },
  }],
  bootstrap: [RootComponent],
})
export class AppModule {
}
