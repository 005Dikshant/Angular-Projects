import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { routes } from '../constants/constants';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../modal/Products';

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
}
