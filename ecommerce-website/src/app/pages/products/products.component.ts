import { MasterService } from '../../services/master.service';
import {
  APIResponseModel,
  CartInfo,
  CateogryResponse,
  Customer,
} from '../../modal/Products';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductResponse } from '../../modal/Products';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { routes } from '../../constants/constants';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList = signal<ProductResponse[]>([]);
  categoryList$: Observable<CateogryResponse[]> = new Observable<
    CateogryResponse[]
  >();

  masterService = inject(MasterService);

  loggedInUserInfo: Customer | undefined = undefined;

  ngOnInit(): void {
    this.loadAllProducts();
    this.categoryList$ = this.masterService
      .getAllCategories()
      .pipe(map((item) => item.data));

    const isUser = localStorage.getItem(routes.LOCAL_KEY);
    if (isUser != null) {
      this.loggedInUserInfo = JSON.parse(isUser);
      console.log(this.loggedInUserInfo);
      console.log(isUser);
    }
  }

  loadProductsByCategory(categoryId: number) {
    this.masterService
      .getProductByCategory(categoryId)
      .subscribe((res: APIResponseModel) => {
        this.productList.set(res.data);
      });
  }

  loadAllProducts() {
    this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      this.productList.set(res.data);
    });
  }

  addToUserCart(productId: number) {
    if (this.loggedInUserInfo == undefined) {
      alert('Login to add the products to cart');
      return;
    }

    debugger;

    const userCart: CartInfo = new CartInfo();

    (userCart.CustId = this.loggedInUserInfo.custId),
      (userCart.ProductId = productId);

    this.masterService
      .addToCart(userCart)
      .subscribe((res: APIResponseModel) => {
        if (res.result === true) {
          alert('Added to Cart successfully');
        } else {
          alert('Error adding to cart');
        }
      });
  }
}
