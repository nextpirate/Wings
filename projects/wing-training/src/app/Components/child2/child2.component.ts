import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

import { Parent1Component } from '../parent1/parent1.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @ContentChild('para')
  para1!: ElementRef;

  @ContentChild(Parent1Component)
  parent1Component!: Parent1Component;

  @ContentChildren('para')para2!:QueryList<ElementRef>
  viewMore(){
       console.log(this.para1.nativeElement)
       console.log(this.parent1Component)
       console.log(this.para2.forEach((el)=>{
      console.log(el.nativeElement)
       }))
  }
}
