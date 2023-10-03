import { Component } from '@angular/core';
import { RadioButtonSelectionServiceService } from '../service/radio-button-selection-service.service';
@Component({
  selector: 'app-radio-button-selection',
  templateUrl: './radio-button-selection.component.html',
  styleUrls: ['./radio-button-selection.component.css']
})
export class RadioButtonSelectionComponent {


  users: any[] = [];
  pri: any;
  searchText: any = '';
  selectedColumn: string = 'username'; // Default selected column

  constructor(private radioButtonSelectionServiceService: RadioButtonSelectionServiceService) { }

  ngOnInit() {
    this.radioButtonSelectionServiceService.getusers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);

      this.pri = [
        'id',
        'name',
        'username',
        'email',
        'address.street',
        'address.city',
        'address.zipcode'
      ];
    });
  }

  // Function to apply the filter based on selected column and search text
  applyFilter() {
    if (this.selectedColumn && this.searchText !== '') {
      this.users = this.users.filter((item: any) => {
        const columnValue = this.getColumnValue(item, this.selectedColumn);
        return columnValue && columnValue.toString().toLowerCase().includes(this.searchText.toLowerCase());
      });
    } else if (this.searchText === '') {
      // If searchText is empty, reset users to the original data
      this.radioButtonSelectionServiceService.getusers().subscribe((data: any) => {
        this.users = data;
      });
    }
  }
  resetData(){
   
    this.radioButtonSelectionServiceService.getusers().subscribe((data: any) => {
      this.users = data;
      
  })
  this.searchText = '';
}

  // Helper function to get the column value, including nested properties
  getColumnValue(item: any, column: string): any {
    const columns = column.split('.'); // Split by dot to handle nested properties
    let value = item;

    for (const col of columns) {
      value = value[col];
    }

    return value;
  }
}

