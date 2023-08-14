import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Task } from '../model/task';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
  listTask$ = this.apiService.getListTasks();
  taskResponse: Task = {};

  constructor(private apiService: ApiService, private router: Router) {
  }

  deleteTask(id: string) {
    console.log(id);
    this.apiService.deleteTask(id)
      .subscribe((response) => this.taskResponse = response,
        this.handleError);
  }

  private handleError = (err: any) => {

    if (err.status == 400) {
      alert("Task was not deleted")
      this.router.navigate(['/delete-task'])
    } else {
      this.router.navigate(['/delete-task'])
    }

    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }
}
