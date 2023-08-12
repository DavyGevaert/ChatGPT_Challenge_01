import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})
export class DetailsTaskComponent implements OnInit {

  Id: string = 'not loaded';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(t => this.Id = t.get("Id") ?? 'not passed')
  }

}
