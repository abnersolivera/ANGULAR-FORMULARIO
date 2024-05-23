import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  itemList: string[] = [];
  itemObservable: Observable<string[]>;

  constructor(private itemService: ItemService) {
    this.itemList = this.itemService.getItems();
    this.itemObservable = this.itemService.getItemsObservable();
  }

  remove(item: string) {
    const index = this.itemList.indexOf(item);
    this.itemList.splice(index, 1);
  }

  removeObservable(item: string) {
    this.itemService.removeObservable(item);
  }
}
