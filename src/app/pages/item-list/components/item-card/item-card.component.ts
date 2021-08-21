import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input()
  item: any

  @Output() idEmitter = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  itemBought(id: number) {// para emitir el valor de que se ha pulsado al botón "Comprado"
    this.idEmitter.emit(id)
  }
}
