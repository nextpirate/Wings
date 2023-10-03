import { Component } from '@angular/core';
import { ParentServiceService } from './parent-service.service';


@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

  hiee='Shubham';
  child:string=''
  dataRes:any;
  hie:string|undefined

  constructor(private parent:ParentServiceService){
    this.parent.getUser().subscribe((data: any)=>{
      this.dataRes = data;
    })
  }

  send(data: string){
    this.child=data
  }

  



}
