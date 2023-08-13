import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms'
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
    completed: ['']
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

    this.apiService.createTask(this.task).subscribe(_ => console.log("form posted to server"));

    // return to homepage after task is created
    this.router.navigate(['/search-tasks'])
  }
}
