import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';
import { Client } from '../model/classes/client';
import { Constants } from '../constants/contants';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + Constants.API_GET_METHOD.GET_CLIENTS
    );
  }

  updateAndAddClient(clientObj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      environment.API_URL + Constants.API_POST_METHOD.UPDATE_CLIENT,
      clientObj
    );
  }

  deleteClient(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      environment.API_URL +
        Constants.API_DELETE_METHOD.DELETE_CLIENT +
        `?clientId=${id}`
    );
  }

  saveClientProject(clientObject: any): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(
      environment.API_URL + Constants.API_POST_METHOD.UPDATE_CLIENT_PROJECT,
      clientObject
    );
  }

  getAllClientsProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(
      environment.API_URL + Constants.API_GET_METHOD.GET_ALLCLIENTSPROJECTS
    );
  }
}
