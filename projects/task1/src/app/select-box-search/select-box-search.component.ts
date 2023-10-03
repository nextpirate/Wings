import { Component, ElementRef, ViewChild } from '@angular/core';
import { DxSelectBoxComponent, DxTextBoxComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested';

@Component({
  selector: 'app-select-box-search',
  templateUrl: './select-box-search.component.html',
  styleUrls: ['./select-box-search.component.css']
})
export class SelectBoxSearchComponent {

  @ViewChild('radio')radio:ElementRef | undefined;
  @ViewChild('box')box:ElementRef | undefined;
  @ViewChild('grid')grid:ElementRef | undefined;
  @ViewChild('box1', {static:false}) box1 : DxTextBoxComponent | undefined;
  @ViewChild('RegN', {static:false}) RegN : DxiColumnComponent | undefined;



  search=['Registration Number', 'Chassis Number','pARTY nAME','Mobile Number','Reference Number','Pan Number']

  // ChassisNumber=[111,112,113,114,115]
  // pARTYnAME=[111,112,113,114,115]
  // MobileNumber=[111,112,113,114,115]
  // ReferenceNumber=[111,112,113,114,115]
  // PanNumber=[111,112,113,114,115]

  a:any
  b: any;
  
 

  selectBoxData = [
   {
    'id':1,
    RegistrationDetails:'Registration Number',
    
    RegistrationNumber: 111,
    ChassisNumber: 221,
    VehicleModel: 'AAA1',
    Customer: 'VVV' ,
    MobileNumber: 1111111111 ,
    ReferenceNumber: 111 ,
    PanNumber: 4441
   },
   {
    id:2,
    RegistrationDetails:'Chassis Number',
    RegistrationNumber: 112,
    ChassisNumber: 222,
    VehicleModel: 'AAA2',
    Customer: 'FFF' ,
    MobileNumber: 2222222222 ,
    ReferenceNumber: 222 ,
    PanNumber: 4442
   },
   {
    id:3,
    RegistrationDetails:'Vehicle Model',
    RegistrationNumber: 113,
    ChassisNumber: 223,
    VehicleModel: 'AAA3',
    Customer: 'AAA' ,
    MobileNumber: 3333333333,
    ReferenceNumber: 333 ,
    PanNumber: 4443
   },
   {
    id:4,
    RegistrationDetails:'Customer',
    RegistrationNumber: 114,
    ChassisNumber: 224,
    VehicleModel: 'AAA4',
    Customer: 'BBB' ,
    MobileNumber: 4444444444 ,
    ReferenceNumber: 444 ,
    PanNumber: 4444
   },
   {
    id:5,
    RegistrationDetails:'Mobile Number',
     RegistrationNumber: 115,
    ChassisNumber: 225,
    VehicleModel: 'AAA5',
    Customer: 'CCC' ,
    MobileNumber: 5555555555,
    ReferenceNumber: 555 ,
    PanNumber: 4445
   },
   {
    id:6,
    RegistrationDetails:'Reference Number',
     RegistrationNumber: 116,
    ChassisNumber: 226,
    VehicleModel: 'AAA6',
    Customer: 'DDD' ,
    MobileNumber: 6666666666,
    ReferenceNumber: 666 ,
    PanNumber: 4446
   },
   {
    id:7,
    RegistrationDetails:'Pan Number',
     RegistrationNumber: 113,
    ChassisNumber: 223,
    VehicleModel: 'AAA7',
    Customer: 'EEE' ,
    MobileNumber:7777777777,
    ReferenceNumber: 777 ,
    PanNumber: 4447
   }
   

  ]
  value1:any
  value(e:any){
     this.value1=e;
     return this.value1
  }
  click(){
    this.a =this.box1?.value;
    this.b =this.RegN?._value;
    // if(this.a===this.b){
    //    this.a=this.b.filter((item:any)=>{
    //     item.toString().includes(this.a)
    //    })
  //  }
  // if(this.a === this.b.value) {
  if(this.value1===this.a){
    let newData = this.selectBoxData.filter((item:any) => item.id.toString().includes(this.a) )
    this.selectBoxData = [];
    this.selectBoxData = newData;
  }else{
    console.log('Not matched')
  }
  // }
}
 
}






 // selectBoxData = [
  //   {
  //     'id': 1, 'Registration Details': [
  //       { 'Registration Number': 111 },
  //       { 'Chassis Number': 221 },
  //       {' Vehicle Model': 'AAA1' },
  //       { 'Customer': 'AAA' },
  //       { 'Mobile Number': 1111111111 },
  //       { 'Reference Number': 331 },
  //       { 'Pan Number': 4441 }
  //     ]
  //   },
  //   {
  //     'id': 2, 'RegistrationDetails': [
  //       { 'Registration Number': 112 },
  //       { 'Chassis Number': 222 },
  //       { 'Vehicle Model': 'AAA2' },
  //       { 'Customer': 'BBB' },
  //       { 'Mobile Number': 222222222 },
  //       { 'Reference Number': 332 },
  //       { 'Pan Number': 4442 }
  //     ]
  //   },
  //   {
  //     id: 3, 'RegistrationDetails': [
  //       { 'Registration Number': 113 },
  //       { 'Chassis Number': 223 },
  //       { 'Vehicle Model': 'AAA3' },
  //       { 'Customer': 'CCC' },
  //       { 'Mobile Number': 33333333333 },
  //       { 'Reference Number': 333 },
  //       { 'Pan Number': 4443 }
  //     ]
  //   },
  //   {
  //     id: 4, 'RegistrationDetails': [
  //       { 'Registration Number': 114 },
  //       { 'Chassis Number': 224 },
  //       { 'Vehicle Model': 'AAA4' },
  //       { 'Customer': 'DDD' },
  //       { 'Mobile Number': 4444444444 },
  //       { 'Reference Number': 333 },
  //       { 'Pan Number': 4444 }
  //     ]
  //   },
  //   {
  //     id: 5, 'RegistrationDetails': [
  //       { 'Registration Number': 111 },
  //       { 'Chassis Number': 225 },
  //       { 'Vehicle Model': 'AAA5' },
  //       { 'Customer': 'EEE' },
  //       { 'Mobile Number': 55555555 },
  //       { 'Reference Number': 333 },
  //       { 'Pan Number': 4445 }
  //     ]
  //   },
  //   {
  //     id: 6, 'RegistrationDetails': [
  //       { 'Registration Number': 111 },
  //       { 'Chassis Number': 226 },
  //       { 'Vehicle Model': 'AAA6' },
  //       { 'Customer': 'FFF' },
  //       { 'Mobile Number': 6666666666 },
  //       { 'Reference Number': 333 },
  //       { 'Pan Number': 4446 }
  //     ]
  //   }

  // ]