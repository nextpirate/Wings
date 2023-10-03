import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PanelTabComponent } from './panel-tab/panel-tab.component';
import { FormComponent } from './form/form.component';
import { AccordianComponent } from './accordian/accordian.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { SelectBoxSearchComponent } from './select-box-search/select-box-search.component';
import { RadioButtonSelectionComponent } from './radio-button-selection/radio-button-selection.component';

const routes: Routes = [
  { path: "home1", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {path:"acc",component:AccordianComponent},
  { path: "contact", component: ContactComponent },
  { path: "PanelTab", component: PanelTabComponent },
  {path:'grid', component: DataGridComponent},
  {path:"form",component:FormComponent},
  {path:'selectBoxSearch',component:SelectBoxSearchComponent},
 {path:'RadioButtonSelectionComponent',component:RadioButtonSelectionComponent},
  { path: "", redirectTo: "home1", pathMatch:"full" },
  { path: "**", component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
