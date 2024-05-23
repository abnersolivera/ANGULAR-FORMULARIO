import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private itemList: string[] = [];
  private itemListObservable: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);

  getItemsObservable(): Observable<string[]> {
    return this.itemListObservable.asObservable();
  }

  addItemObservable(item: string) {
    const value = this.itemListObservable.getValue();
    value.push(item);
    this.itemListObservable.next(value);
  }

  removeObservable(item: string) {
    const value = this.itemListObservable.getValue();
    const index = value.indexOf(item);
    value.splice(index, 1);

    this.itemListObservable.next(value);
  }

  addItem(item: string) {
    this.itemList.push(item);
  }

  getItems() {
    return this.itemList;
  }
}
