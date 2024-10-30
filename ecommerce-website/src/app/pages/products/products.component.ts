import { MasterService } from '../../services/master.service';
import { APIResponseModel, CateogryResponse } from '../../modal/Products';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductResponse } from '../../modal/Products';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList = signal<ProductResponse[]>([]);
  categoryList$: Observable<CateogryResponse[]> = new Observable<
    CateogryResponse[]
  >();

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllProducts();
    this.categoryList$ = this.masterService
      .getAllCategories()
      .pipe(map((item) => item.data));
  }

  loadProductsByCategory(categoryId: number) {
    this.masterService
      .getProductByCategory(categoryId)
      .subscribe((res: APIResponseModel) => {
        this.productList.set(res.data);
      });
  }

  loadAllProducts() {
    this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      this.productList.set(res.data);
    });
  }
}
