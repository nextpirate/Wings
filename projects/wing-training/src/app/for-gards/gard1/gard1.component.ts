import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-gard1',
  templateUrl: './gard1.component.html',
  styleUrls: ['./gard1.component.css']
})
export class Gard1Component implements OnInit{


student:any = ['shubham','patil'];

 

// using of Operator

// studentt: Observable<string[]> = of(this.student);
//   app: string[] = []; 
 

//   ngOnInit(): void {

//     this.studentt.subscribe(data=>{
//      this.app=data
//     })


//      using from operator


// studentt: Observable<string> = from(this.student);
//   app: string | undefined 
 

//   ngOnInit(): void {

//     this.studentt.subscribe(data=>{
//      this.app=data
//     })

// using filter operator

myObservable: Observable<string[]> =this.student;


ngOnInit(): void {

    this.myObservable.subscribe(data=>{
        data
       })
  


  

 
      }


}
