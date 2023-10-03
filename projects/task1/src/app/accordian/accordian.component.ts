import { Component, OnInit } from '@angular/core';
import { AccordianServiceService } from '../service/accordian-service.service';


@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit{

  data:any
  constructor(private service1:AccordianServiceService){}
  ngOnInit(): void {
   this.data= this.service1.dataTransfer();
  }


  
}
