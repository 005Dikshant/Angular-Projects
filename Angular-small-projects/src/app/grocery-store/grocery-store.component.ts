import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-store',
  standalone: true,
  imports: [],
  templateUrl: './grocery-store.component.html',
  styleUrl: './grocery-store.component.css',
})
export class GroceryStoreComponent {
  productList = [
    'Cooking oil-(120)',
    'Rice-(60)',
    'Dal-(100)',
    'Sugar-(45)',
    'Aata-(40)',
    'Turmeric-(200)',
    'Coffee-(2500)',
    'Dry Fruits Mix-(850)',
  ];

  addedItemList: any[] = [];

  currentItemName: string = '';
  itemQty: number = 0;

  getItemsInformation(itemName: string, qty: string) {
    this.currentItemName = itemName;
    this.itemQty = Number(qty);

    const itemInfo = {
      itemName: this.currentItemName,
      qty: this.itemQty,
    };

    this.addedItemList.push(itemInfo);
  }
}
