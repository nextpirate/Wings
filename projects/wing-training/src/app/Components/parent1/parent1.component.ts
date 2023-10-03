import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

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

  ngAfterViewInit(){
   console.log(this.age12.nativeElement.innerHTML);

  }
  
}
