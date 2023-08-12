import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms'
import { Task } from '../model/task';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: Task = {};

  constructor(private apiService: ApiService,
              private fb: FormBuilder) {

  }

  form = this.fb.group({
    id: [''],
    title: [''],
    description: [''],
    dueDate: [''],
    completed: [''],
  })

  ngOnInit(): void {
    
  }

  postTask() {
    console.log("Form Values:", this.form.value);

    this.task.id = this.form.value.id ?? 'not loaded';
    this.task.title = this.form.value.title ?? 'not loaded';
    this.task.description = this.form.value.description ?? 'not loaded';
    this.task.dueDate = new Date();
    this.task.completed = new Date();

    this.apiService.createTask(this.task).subscribe(_ => console.log("form posted to server"));
  }
}
