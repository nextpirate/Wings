import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForGardsComponent } from './for-gards.component';
import { Gard1Component } from './gard1/gard1.component';
import { Gard2Component } from './gard2/gard2.component';
import { gardd11Guard } from './gardd11.guard';
import { gardd22Guard } from './gardd22.guard';
import { gard33Guard } from './gard33.guard';

const routes: Routes = [{ path: '',children:
  [ 
    {path:'', component:ForGardsComponent, canActivate:[gardd11Guard]},
    {
      path:'',
      canActivateChild:[gard33Guard],
      children:[
        {path:'gard1', component:Gard1Component},
        {path:'gard2', component:Gard2Component}
      ]
    }
  ]
},
                       
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForGardsRoutingModule { }
