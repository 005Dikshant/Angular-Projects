import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-store',
  standalone: true,
  imports: [],
  templateUrl: './grocery-store.component.html',
  styleUrl: './grocery-store.component.css',
})
export class GroceryStoreComponent implements OnInit {
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

  ngOnInit(): void {
    this.totalPrice = '00.00';
  }

  addedItemList: any[] = [];

  currentItemName: string = '';
  itemQty: number = 0;
  totalPrice: any = 0;

  getItemsInformation(itemName: string, qty: string) {
    this.currentItemName = itemName;
    this.itemQty = Number(qty);

    const item = this.addedItemList.find(
      (item) => item.itemName === this.currentItemName
    );

    if (item !== undefined) {
      item.qty += this.itemQty;
    } else {
      const itemInfo = {
        itemName: this.currentItemName,
        price: this.getItemPrice(this.currentItemName),
        qty: this.itemQty,
      };

      this.addedItemList.push(itemInfo);
    }
    this.calculateTotalPrice();
  }

  getItemPrice(item: string): number {
    const startIndex = item.indexOf('(') + 1;
    const endIndex = item.indexOf(')');
    const number = parseInt(item.substring(startIndex, endIndex), 10);
    return number;
  }

  calculatePrice(item: any) {
    return item.price + ' * ' + item.qty + ' = ' + item.price * item.qty;
  }
  calculateTotalPrice() {
    this.totalPrice = this.addedItemList.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.qty,
      0
    );
  }

  deleteItem(item: any) {
    this.addedItemList = this.addedItemList.filter(
      (products) => products.itemName !== item.itemName
    );
    this.calculateTotalPrice();
  }
}
