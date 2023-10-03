import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForRoutegardsssComponent } from './for-routegardsss.component';

const routes: Routes = [{ path: '', component: ForRoutegardsssComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForRoutegardsssRoutingModule { }
