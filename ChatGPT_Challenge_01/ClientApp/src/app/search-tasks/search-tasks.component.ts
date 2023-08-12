import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-tasks',
  templateUrl: './search-tasks.component.html',
  styleUrls: ['./search-tasks.component.css']
})
export class SearchTasksComponent {

  constructor(private apiService: ApiService) {
  }

  listTask$ = this.apiService.getListTasks();
}

//export class Example {
//  public id: Guid;
//  constructor() {
//    this.id = Guid.create(); // ==> b77d409a-10cd-4a47-8e94-b0cd0ab50aa1
//  }
//}
