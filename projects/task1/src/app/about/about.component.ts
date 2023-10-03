import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  

  Wings:any[] =[
    {Text:"Date",Datatype:'Date'},
    {Text:"Party Code",Datatype:'select'},
    {Text:"GST Transaction",Datatype:'string'},
    {Text:"Service Tax",Datatype:'select1'},
    {Text:"Shopping",Datatype:'string'},
    {Text:"Branch",Datatype:'select2'},
    {Text:"Party Account",Datatype:'select3'},
    {Text:"Credit Period",Datatype:'string'},
    {Text:"VAT/CST Transaction",Datatype:'select4'},
    {Text:"Remarks",Datatype:'string'},
    {Text:"Registration Number",Datatype:'string'},
    {Text:"Party GST",Datatype:'string'},
    {Text:"Price List",Datatype:'select5'},
    
  ]
  selects =['PartyCode','ServiceTax']
  PartyCode:number[]=[1,2,3,4,5,6]
  ServiceTax=[11,12,123,1234]
  Branch=['hyd','pune','mumbai']
  PartyAccount=[111,11111,111111,111111111,11111111]
  Transaction=['credit','debit','phonepay','googlepay']
  List=['completed','remaining','25k remaining']
  



}
