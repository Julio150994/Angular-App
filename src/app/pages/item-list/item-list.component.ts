import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  listName!: string; //poner listName! y se resuelve error de inicialización de variable
  whislistItems: any = []

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly itemService: ItemService) {
      this.activatedRoute.parent?.url.subscribe(url => this.listName = url[0].path) //poner parent? y se resuelve el error
  }

  ngOnInit(): void {
    // Aquí es donde utilizamos el servicio, una vez creado
    // .subscribe(data => this.whislistItems = data)
    this.whislistItems = this.itemService.getWishlist()
  }

  idEmitted(id: number) {
      console.log("Elemento comprado: ",id);
  }
}
