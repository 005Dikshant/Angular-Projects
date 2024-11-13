import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { map, Observable } from 'rxjs';
import {
  APIResponseModel,
  CartProductResponse,
  PlaceOrderRequest,
} from '../../modal/Products';
import { AsyncPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css',
})
export class CreateOrderComponent implements OnInit {
  masterService = inject(MasterService);

  userCart$: Observable<CartProductResponse[]> = new Observable<
    CartProductResponse[]
  >();

  totalAmount = 0;

  placeOrderForm: FormGroup = new FormGroup({
    SaleId: new FormControl(0),
    CustId: new FormControl(0),
    SaleDate: new FormControl(new Date()),
    TotalInvoiceAmount: new FormControl(0),
    Discount: new FormControl(0),
    PaymentNaration: new FormControl(''),
    DeliveryAddress1: new FormControl(''),
    DeliveryAddress2: new FormControl(''),
    DeliveryCity: new FormControl(''),
    DeliveryPinCode: new FormControl(''),
    DeliveryLandMark: new FormControl(''),
    IsCanceled: new FormControl(false),
  });

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    if (this.masterService.loggedInUserInfo.custId !== 0) {
      const userId: number = this.masterService.loggedInUserInfo.custId;
      this.userCart$ = this.masterService.showCartItems(userId).pipe(
        map((items) => {
          items.data.map((item: CartProductResponse) => {
            this.totalAmount += item.productPrice;
          });
          return items.data;
        })
      );
    }
  }

  placeOrder() {
    if (this.masterService.loggedInUserInfo.custId !== 0) {
      this.placeOrderForm.patchValue({
        CustId: this.masterService.loggedInUserInfo.custId, // Set the customer ID dynamically
        TotalInvoiceAmount: this.totalAmount, // Set the total invoice amount dynamically
      });
    }

    const order: PlaceOrderRequest = this.placeOrderForm
      .value as PlaceOrderRequest;

    this.masterService.placeOrder(order).subscribe((res: APIResponseModel) => {
      if (res.result === true) {
        alert('Order placed successfully');
        this.placeOrderForm.reset();
        this.getCartItems();
      } else {
        alert('Error in placing the order');
      }
    });
  }
}
