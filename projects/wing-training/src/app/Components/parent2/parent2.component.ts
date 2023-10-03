import { Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})


export class Parent2Component {

 @ViewChild('para')
  view!: ElementRef;
  @ViewChildren('para')
  views!:QueryList< ElementRef>;
  

 send(){
  console.log(this.view.nativeElement)
  console.log(this.views.forEach((ee)=>{
    console.log(ee.nativeElement)
  }))
 }
}
