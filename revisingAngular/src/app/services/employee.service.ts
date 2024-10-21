import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + 'GetAllEmployee'
    );
  }
}
