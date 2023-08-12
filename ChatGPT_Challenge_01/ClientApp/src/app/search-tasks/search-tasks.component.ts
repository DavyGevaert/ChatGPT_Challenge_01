import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import { ApiService } from '../services/api.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-search-tasks',
  templateUrl: './search-tasks.component.html',
  styleUrls: ['./search-tasks.component.css']
})
export class SearchTasksComponent {
  listTask$ = this.apiService.getListTasks();

  task$ = new Observable<Task>;

  constructor(private apiService: ApiService) {
  }

  getTaskById(id: Guid) {
    this.task$ = this.apiService.getTaskById(id);
  }

}

//export class Example {
//  public id: Guid;
//  constructor() {
//    this.id = Guid.create(); // ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
//  }
//}
