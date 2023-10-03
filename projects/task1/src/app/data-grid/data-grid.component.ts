import { Component } from '@angular/core';
import { DataGridService,Customer } from '../service/data-grid.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {

  customers:Customer[];
  constructor(private service:DataGridService){
    this.customers=this.service.getCustomers();
  }
}
