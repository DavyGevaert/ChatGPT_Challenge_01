import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from '../services/api.service';
import { Task } from '../model/task';


@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})

export class DetailsTaskComponent implements OnInit {

  taskId: string = 'not loaded';
  task: Task = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.findTask(p.get("Id")));
  }

  private findTask = (taskId: string | null) => {
    this.taskId = taskId ?? 'not passed';

    this.apiService.getTaskById(this.taskId)
      .subscribe((response) => this.task = response,
        this.handleError);
  }

  private handleError = (err: any) => {

    if (err.status == 400) {
      alert("Task not found!")
      // return to homepage if task is not found
      this.router.navigate(['/search-tasks'])
    }

    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

}
