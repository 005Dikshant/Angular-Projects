import { MasterService } from '../../services/master.service';
import { APIResponseModel, CateogryResponse } from '../../modal/Products';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductResponse } from '../../modal/Products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList = signal<ProductResponse[]>([]);
  categoryList: Observable<CateogryResponse[]> = new Observable<
    CateogryResponse[]
  >();

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      this.productList.set(res.data);
    });
  }
}
