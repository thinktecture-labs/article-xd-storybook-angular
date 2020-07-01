import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {
  getAllTasks(): Observable<any[]> {
    throw new Error('not implemented');
  }
}
