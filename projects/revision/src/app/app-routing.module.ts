import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'forRoutegardsss', loadChildren: () => import('./for-routegardsss/for-routegardsss.module').then(m => m.ForRoutegardsssModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
