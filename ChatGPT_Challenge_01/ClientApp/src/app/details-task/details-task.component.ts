import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../services/api.service';
import { Task } from '../model/task';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})

export class DetailsTaskComponent implements OnInit {

  taskId: string = 'not loaded';
  task: Task = {};

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private apiService: ApiService) {
  }

  form = this.fb.group({
    id: [''],
    title: [''],
    description: [''],
    dueDate: [''],
    completed: [null, Validators.required]
  })

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
      window.location.href = "/search-tasks"
    }

    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

  editTask() {
    console.log("Form Values:", this.form.value);

    this.task.id = this.taskId;
    this.task.title = this.form.value.title ?? 'not loaded';
    this.task.description = this.form.value.description ?? 'not loaded';

    // add default minutes part
    let dueDate = this.form.value.dueDate?.toString() + ':00';
    this.task.dueDate = new Date(dueDate);

    this.task.completed = !!(this.form.value.completed ?? false);

    this.apiService.editTask(this.taskId, this.task).subscribe(_ => console.log("form posted to server"));

    // return to homepage after task is created
    window.location.href = "/search-tasks"
  }

  deleteTask() {
    console.log(this.taskId);
    this.apiService.deleteTask(this.taskId)
      .subscribe(_ => console.log("task succesfully deleted on web api"),
        this.deleteTaskError);
    window.location.href = "/search-tasks"
  }

  private deleteTaskError = (err: any) => {

    if (err.status == 400) {
      alert("Task was already deleted")
      window.location.href = "/search-tasks"
    } 

    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

}
