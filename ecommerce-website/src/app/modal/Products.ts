export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface CateogryResponse {
  categoryId: number;
  categoryName: string;
  parentCategoryId: number;
  userId: any;
}

export interface ProductResponse {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: string;
  deliveryTimeSpan: string;
  categoryId: number;
  productImageUrl: string;
  categoryName: string;
}