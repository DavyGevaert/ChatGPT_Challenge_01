import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Task } from '../model/task'

@Component({
  selector: 'app-search-tasks',
  templateUrl: './search-tasks.component.html',
  styleUrls: ['./search-tasks.component.css']
})
export class SearchTasksComponent implements OnInit {

  public tasks$: Observable<Task[]>;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    // https://www.youtube.com/watch?v=DvnzeCfYg0s how to update list whenever a new Task is created
    this.apiService.refreshNeeded$
      .subscribe(() => {
        this.getTasks();
      });

    // bootstrap call
    this.tasks$ = this.apiService.getListTasks();
  }

  private getTasks() {
    this.tasks$ = this.apiService.getListTasks();
  }
}

//export class Example {
//  public id: Guid;
//  constructor() {
//    this.id = Guid.create(); // ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
//  }
//}
