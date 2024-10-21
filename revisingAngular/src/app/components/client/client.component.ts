import { ClientService } from '../../services/client.service';
import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/classes/client';
import { FormsModule } from '@angular/forms';
import { APIResponseModel } from '../../model/interface/role';
import { LoadingComponent } from '../loading/loading.component';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, LoadingComponent, DatePipe, JsonPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);
  isLoading: boolean = true;

  currentDate = new Date();

  loadClient() {
    //debugger;
    this.clientService.getAllClients().subscribe((res: any) => {
      this.clientList = res.data;
      this.isLoading = false;
    });
  }

  saveClient() {
    this.isLoading = true;
    this.clientService
      .updateAndAddClient(this.clientObj)
      .subscribe((res: APIResponseModel) => {
        if (res.result == true) {
          alert('Client Created Success');
          this.loadClient();

          this.clientObj = new Client();
        } else {
          alert('Error creating client');
        }

        this.isLoading = false;
      });
  }

  deleteClient(id: number) {
    const confirmResponse = confirm('Are you sure, you want to delete?');
    if (confirmResponse) {
      this.isLoading = true;
      this.clientService.deleteClient(id).subscribe((res: APIResponseModel) => {
        if (res.result == true) {
          alert('Client Deleted Success');
          this.loadClient();
        } else {
          alert('Error Deleting client');
        }
        this.isLoading = false;
      });
    }
  }

  updateClient(client: Client) {
    this.clientObj = client;
  }

  resetForm() {
    this.clientObj = new Client();
  }

  ngOnInit(): void {
    this.loadClient();
  }
}
