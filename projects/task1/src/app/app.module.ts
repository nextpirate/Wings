import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';


import {
  DxAccordionModule,
  DxButtonModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFormModule,
  DxPopupModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
  DxTabPanelModule,
  DxTextBoxModule,
  
} from 'devextreme-angular';
import { PanelTabComponent } from './panel-tab/panel-tab.component';
import { PanelService } from './panel-tab/panel.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordianServiceService } from './service/accordian-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DataGridComponent } from './data-grid/data-grid.component';
import { SelectBoxSearchComponent } from './select-box-search/select-box-search.component';
import { RadioButtonSelectionComponent } from './radio-button-selection/radio-button-selection.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotfoundComponent,
    PanelTabComponent,
    FormComponent,
    AccordianComponent,
    DataGridComponent,
    SelectBoxSearchComponent,
    RadioButtonSelectionComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxPopupModule,
    DxButtonModule,
    DxDateBoxModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxTabPanelModule,
    DxDataGridModule,ReactiveFormsModule,DxFormModule,DxAccordionModule,HttpClientModule,
    DxRadioGroupModule,FormsModule
  ],
  providers: [PanelService,AccordianServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
