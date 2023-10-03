import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-panel-tab',
  templateUrl: './panel-tab.component.html',
  styleUrls: ['./panel-tab.component.css']
})
export class PanelTabComponent implements OnInit{

  
  tabDataSource:any [] =[];
 
    constructor() {
        
    }

    ngOnInit(){
      this.serviceData();
    }

   
    selects =['PartyCode','ServiceTax']
    PartyCode:number[]=[1,2,3,4,5,6]
    ServiceTax=[11,12,123,1234]
    Branch=['hyd','pune','mumbai']
    PartyAccount=[111,11111,111111,111111111,11111111]
    Transaction=['credit','debit','phonepay','googlepay']
    List=['completed','remaining','25k remaining']
    
    Wings=[
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
    
    tabColumnData:any[]=[
      {id:1, tabName: 'Tab1', singleRow: true},
      {id:2, tabName: 'Tab2', singleRow: false},
      {id:3, tabName: 'Tab3', singleRow: false},
      {id:4, tabName: 'Tab4', singleRow: false},
      {id:5, tabName: 'Tab5', singleRow: true},
      {id:6, tabName: 'Tab6', singleRow: false},

    ];

serviceData(){
  this.tabDataSource =[
      {Date: "as",Branch: "s",remark: "s1"},
      {Date: "a1",Branch: "v",remark: "s2"},
      {Date: "a2",Branch: "A",remark: "s3"},
      {Date: "a3",Branch: "c",remark: "s4"},
      {Date: "a4",Branch: "r",remark: "s5"},
      {Date: "as",Branch: "s",remark: "s1"},
      {Date: "a1",Branch: "v",remark: "s2"},
      {Date: "a2",Branch: "A",remark: "s3"},
      {Date: "a3",Branch: "c",remark: "s4"},
      {Date: "a4",Branch: "r",remark: "s5"},

    ]
   


}
  
}
