import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { map, Observable } from 'rxjs';
import { CartProductResponse } from '../../modal/Products';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css',
})
export class CreateOrderComponent implements OnInit {
  masterService = inject(MasterService);

  userCart$: Observable<CartProductResponse[]> = new Observable<
    CartProductResponse[]
  >();

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    if (this.masterService.loggedInUserInfo.custId !== 0) {
      const userId: number = this.masterService.loggedInUserInfo.custId;
      this.userCart$ = this.masterService
        .showCartItems(userId)
        .pipe(map((item) => item.data));
    }
  }
}
