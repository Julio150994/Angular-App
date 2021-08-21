import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListRoutingModule } from './item-list-routing.module';
import { ItemListComponent } from './item-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    ItemListRoutingModule
  ]
})
export class ItemListModule { }
