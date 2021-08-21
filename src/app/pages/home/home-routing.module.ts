import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: 'whislist', loadChildren: () => import('../item-list/item-list.module').then(m => m.ItemListModule) },
      { path: 'completed-list', loadChildren: () => import('../item-list/item-list.module').then(m => m.ItemListModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
