import { Component,Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(){}
  @Output() msgfromChild=new EventEmitter();
  @Input() msgfromParent='';
  @Input() obj={
    'name':'',
    'age':0
  }
  @Input() arr=[
    { name:'' ,role:''},
    { name:'' ,role:''},
    
  ]

  childClick(){
    const obb={
      name:'Shubham',
      age:25
    }
   const obbb=[
      {name:'ajay', age:26 },
      {name:'kundan', age:23 },
      {name:'abhishek', age:30 }
    ]
    this.msgfromChild.emit(obb)
    // this.msgfromChild.emit(obbb)
  }

 
}
