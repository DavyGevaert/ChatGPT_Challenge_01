import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms'
import { Task } from '../model/task';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  task: Task = {};

  constructor(private apiService: ApiService,
              private fb: FormBuilder,
              private router: Router) {

  }

  form = this.fb.group({
    id: [''],
    title: [''],
    description: [''],
    dueDate: [''],
    completed: [null, Validators.required]
  })

  postTask() {
    console.log("Form Values:", this.form.value);

    this.task.id = this.form.value.id ?? 'not loaded';
    this.task.title = this.form.value.title ?? 'not loaded';
    this.task.description = this.form.value.description ?? 'not loaded';

    // add default minutes part
    let dueDate = this.form.value.dueDate?.toString() + ':00';
    this.task.dueDate = new Date(dueDate);

    this.task.completed = !!(this.form.value.completed ?? false);

    this.apiService.createTask(this.task)
      .subscribe(_ => console.log("form posted to server"), this.handleError);

    // return to homepage after task is created
    this.router.navigate(['/search-tasks'])
  }

  private handleError = (err: any) => {

    if (err.status == 400) {
      alert("Task not created!")
      // return to homepage if task is not created
      this.router.navigate(['/search-tasks'])
    } 

    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }
}
