import { APIResponseModel, IDesgination } from '../../model/interface/role';
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-desgination',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './desgination.component.html',
  styleUrl: './desgination.component.css',
})
export class DesginationComponent implements OnInit {
  masterService = inject(MasterService);
  desginationList: IDesgination[] = [];
  isLoading: Boolean = true;

  ngOnInit(): void {
    this.masterService.getDesgination().subscribe(
      (res: APIResponseModel) => {
        this.desginationList = res.data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        alert('API error/ Network Down');
      }
    );
  }
}
