import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  
  msg='';
  ob={
    name:'',
    age:0
  }

  arrr=[
    { name:'' ,role:''},
    { name:'' ,role:''}
    
  ]
  @ViewChild('inputdate')
  birthyear12!: ElementRef;
  @ViewChild('inputage')
  age12!: ElementRef;

  calculateAge(){
    let Birthyear = new Date(this.birthyear12.nativeElement.value).getFullYear();
    let Currentyear = new Date().getFullYear();
    let age1 = Currentyear - Birthyear;
    this.age12.nativeElement.value=age1;
  }
  
user: any;
users=[]
  sendClick(){
    this.msg='Hello ! Child';
    this.ob.name='Shubham';
    this.ob.age=25;
    this.arrr[0].name='Suresh';
    this.arrr[0].role='Manager';
    this.arrr[1].name='Humayun';
    this.arrr[1].role='Team Lead';
  }
  parentElement(event:any){
        this.user=event;
        // this.users=event;
        
        // this.users[1]
  }
}
