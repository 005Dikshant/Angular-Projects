import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getDesgination(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation'
    );
  }

  getAllUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
