import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForGardsRoutingModule } from './for-gards-routing.module';
import { ForGardsComponent } from './for-gards.component';
import { Gard1Component } from './gard1/gard1.component';
import { Gard2Component } from './gard2/gard2.component';


@NgModule({
  declarations: [
    ForGardsComponent,
    Gard1Component,
    Gard2Component
  ],
  imports: [
    CommonModule,
    ForGardsRoutingModule
  ]
})
export class ForGardsModule { }
