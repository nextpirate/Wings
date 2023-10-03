import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routeparameters',
  templateUrl: './routeparameters.component.html',
  styleUrls: ['./routeparameters.component.css']
})
export class RouteparametersComponent implements OnInit{

id:string |null='';
name:string |null='';
price:string |null='';

constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    
    this.id=this.route.snapshot.paramMap.get('id');
    this.name =this.route.snapshot.paramMap.get('name');
    this.price= this.route.snapshot.paramMap.get('price');  
  }

}
