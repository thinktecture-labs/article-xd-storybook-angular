import {Component, ElementRef, ViewChild} from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Observable} from 'rxjs';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

@Component({
  selector: 'labs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  values = [81, 15, 42];
  showCards = false;
  tasks$: Observable<any[]>;

  constructor(taskService: TaskService) {
    this.tasks$ = taskService.getAllTasks();
    setInterval(() => {
      this.values[getRandomInt(0, 3)] = getRandomInt(1, 100);
    }, 2000);

    setTimeout(() => {
      this.showCards = true;
    }, 1000);
  }
}
