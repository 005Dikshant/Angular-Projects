export interface IRole {
  roleId: number;
  role: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: [];
}

export interface IDesgination {
  designationId: number;
  designation: string;
}

export interface IEmployee {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
  mobile: string;
}

export interface IClientProject {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  projectName: string;
  startDate: Date;
  expectedEndDate: Date;
  clientName: string;
  clientProjectId: number;
}
