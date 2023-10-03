import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input('hiee')hiee:string=''
  @Output('hiee1')hiee1:EventEmitter<string>=new EventEmitter<string>
  // @ViewChild('hirr')
  // hirr!: ElementRef;
  @ViewChildren('hirr')
  hirr!: QueryList<any>;

  @ContentChild('emp')emp !:ElementRef

  send(){
    this.hiee1.emit('hiee Shubham');
  }
  ngAfterViewInit(){
    // this.hirr.nativeElement.style.color="black";
    // this.hirr.nativeElement.style.background="white";
    this.hirr.first.nativeElement.style.color="black";
    this.hirr.last.nativeElement.style.color="yellow";
    // this.emp.nativeElement.setAttribute('style','color:pink')


  }
  ngAfterContentInit(){
    this.emp.nativeElement.style.background='white';
    this.emp.nativeElement.style.color='black'

  }
}
