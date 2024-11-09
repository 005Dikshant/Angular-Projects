import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { routes } from '../constants/constants';
import { Observable, Subject } from 'rxjs';
import { APIResponseModel, CartInfo, Customer, User } from '../modal/Products';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  onCartAdded: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + routes.API_GET_METHOD.GET_PRODUCTS
    );
  }

  getAllCategories(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + routes.API_GET_METHOD.GET_CATEGORIES
    );
  }

  getProductByCategory(categoryId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      `${environment.API_URL}${routes.API_GET_METHOD.GET_CATEGORY_ID}?id=${categoryId}`
    );
  }

  registerUser(user: Customer): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      `${environment.API_URL}${routes.API_POST_METHOD.REGISTER_USER}`,
      user
    );
  }

  loginUser(user: User): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      `${environment.API_URL}${routes.API_POST_METHOD.LOGIN}`,
      user
    );
  }

  addToCart(userCart: CartInfo): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      `${environment.API_URL}${routes.API_POST_METHOD.ADD_TO_CART}`,
      userCart
    );
  }

  showCartItems(custId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      `${environment.API_URL}${routes.API_GET_METHOD.GET_CART_PRODUCT_BYCUST_ID}?id=${custId}`
    );
  }

  deleteProductFromCartById(prodId: number): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      `${environment.API_URL}${routes.API_GET_METHOD.DELETE_PRODUCT_BY_ID}?id=${prodId}`
    );
  }
}
