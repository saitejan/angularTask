import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit {

  constructor( private dataservice: DataService ) { }
  mdata: Data[];
  
  ngOnInit() {
    this.getData();
  }


  getData(): void {
    this.mdata = this.dataservice.getData();
  }

}
