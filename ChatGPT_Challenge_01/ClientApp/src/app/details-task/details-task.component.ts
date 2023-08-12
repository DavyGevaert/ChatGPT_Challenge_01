import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})

export class DetailsTaskComponent implements OnInit {

  Id: string = 'not loaded';
  task$: any;  

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.findTask(p.get("Id")));
  }

  private findTask = (Id: string | null) => {
    this.Id = Id ?? 'not passed';

    this.apiService.getTaskById(this.Id)
                    .subscribe((response) => this.task$ = response, this.handleError);
  }

  private handleError(err: any) {

    if (err.status == 404) {
      alert("Task not found!")
    }

    console.log("Response Error. Status: ", err.status)
    console.log("Response Error. Status Text: ", err.statusText)
    console.log(err)
  }

}
