import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { Parent1Component } from './Components/parent1/parent1.component';
import { Parent2Component } from './Components/parent2/parent2.component';
import { Child2Component } from './Components/child2/child2.component';
import { RoutingComponent } from './Components/routing/routing.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RouteparametersComponent } from './Components/routeparameters/routeparameters.component';
import { UsingTemplateDrivenFormsComponent } from './Components/using-template-driven-forms/using-template-driven-forms.component';
import { UsingReactiveFormComponent } from './Components/using-reactive-form/using-reactive-form.component';
import { DxButtonModule, DxPopupModule } from 'devextreme-angular';

import { PopComponent } from './pop/pop.component';
import { PipenComponent } from './Components/pipen/pipen.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Parent2Component,
    Child2Component,
    RoutingComponent,
    NotFoundComponent,
    RouteparametersComponent,
    UsingTemplateDrivenFormsComponent,
    UsingReactiveFormComponent,
    PopComponent,
    PipenComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,FormsModule,ReactiveFormsModule,DxButtonModule, DxPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
