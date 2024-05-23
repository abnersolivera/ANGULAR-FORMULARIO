import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {
  newItem: string = '';

  constructor(private itemService: ItemService) {}

  addItem() {
    this.itemService.addItem(this.newItem);
    this.newItem = '';
  }

  addItemObservable() {
    this.itemService.addItemObservable(this.newItem);
    this.newItem = '';
  }
}
