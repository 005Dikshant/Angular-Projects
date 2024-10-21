import { EmployeeService } from '../../services/employee.service';
import { Client } from '../../model/classes/client';
import {
  APIResponseModel,
  IClientProject,
  IEmployee,
} from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  clientService = inject(ClientService);
  employeeService = inject(EmployeeService);
  clientList: Client[] = [];
  employeeList: IEmployee[] = [];
  clientProject = signal<IClientProject[]>([]);

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    startDate: new FormControl(new Date()),
    expectedEndDate: new FormControl(new Date()),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    leadByEmpId: new FormControl(''),
    clientId: new FormControl(''),
  });

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployees();
    this.getAllClientsProjects();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    });
  }

  saveClientProject() {
    {
      const formValue = this.projectForm.value;
      debugger;
      this.clientService
        .saveClientProject(formValue)
        .subscribe((res: APIResponseModel) => {
          if (res.result == true) {
            alert('Project added Successfully');
          } else {
            alert('Error in connection');
          }
        });
    }
  }

  getAllEmployees() {
    this.employeeService
      .getAllEmployees()
      .subscribe((res: APIResponseModel) => {
        this.employeeList = res.data;
      });
  }

  getAllClientsProjects() {
    this.clientService
      .getAllClientsProjects()
      .subscribe((res: APIResponseModel) => {
        this.clientProject.set(res.data);
      });
  }

  resetForm() {
    this.projectForm.reset();
  }
}
