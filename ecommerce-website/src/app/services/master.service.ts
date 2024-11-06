import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { routes } from '../constants/constants';
import { Observable } from 'rxjs';
import { APIResponseModel, Customer, User } from '../modal/Products';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
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
}
