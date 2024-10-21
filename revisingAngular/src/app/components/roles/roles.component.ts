import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IRole } from '../../model/interface/role';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { Observable } from 'rxjs';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, LoadingComponent, AsyncPipe],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  http = inject(HttpClient);
  roleList: IRole[] = [];
  isLoading: boolean = true;

  masterService = inject(MasterService);

  allRoles: Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.getAllRoles();
    this.allRoles = this.masterService.getAllUsers();
  }

  getAllRoles() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe(
        (res: any) => {
          this.roleList = res.data;
          this.isLoading = false;
        },
        (error) => {
          alert('Network Error');
        }
      );
  }
}
