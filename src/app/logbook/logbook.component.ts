import { Component, OnInit } from '@angular/core';
import { MTABLE } from "./../mock-table";

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {
  
  mdata= MTABLE;
  
  constructor() { }

  ngOnInit() {
  }

}
