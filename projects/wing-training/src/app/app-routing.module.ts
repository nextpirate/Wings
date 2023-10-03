import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child2Component } from './Components/child2/child2.component';
import { Parent2Component } from './Components/parent2/parent2.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RouteparametersComponent } from './Components/routeparameters/routeparameters.component';


const routes: Routes = [
  {
    path:'child', component:Child2Component
  },
  {
    path:'parent', component:Parent2Component
  },
  {
    path:'routes/:id/:name/:price', component:RouteparametersComponent
  },
  {
    path:'', redirectTo:'child',pathMatch:'full'
  },
  { path: 'gardss', loadChildren: () => import('./for-gards/for-gards.module').then(m => m.ForGardsModule) },
  {
    path:'**', component:NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
