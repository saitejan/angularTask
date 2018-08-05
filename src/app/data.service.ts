import { Injectable } from '@angular/core';
import { Data } from './data';
import { MDATA } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Data[] {
       return MDATA;
     }

}
