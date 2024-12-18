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

export class Customer {
  CustId: number;
  custId: number;
  Name: string;
  MobileNo: string;
  Password: string;
  name: string;

  constructor() {
    this.CustId = 0;
    this.custId = 0;
    this.Name = '';
    this.MobileNo = '';
    this.Password = '';
    this.name = '';
  }
}

export class User {
  UserName: string;
  UserPassword: string;

  constructor() {
    this.UserName = '';
    this.UserPassword = '';
  }
}

export class CartInfo {
  CartId: number;
  CustId: number;
  ProductId: number;
  Quantity: number;
  AddedDate: Date;

  constructor() {
    this.CartId = 0;
    this.ProductId = 0;
    this.Quantity = 1;
    this.AddedDate = new Date();
    this.CustId = 0;
  }
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

export interface CartProductResponse {
  cartId: number;
  custId: number;
  productId: number;
  quantity: number;
  productShortName: string;
  addedDate: string;
  productName: string;
  categoryName: string;
  productImageUrl: string;
  productPrice: number;
}

export interface PlaceOrderRequest {
  SaleId: number;
  CustId: number;
  SaleDate: Date;
  TotalInvoiceAmount: number;
  Discount: number;
  PaymentNaration: string;
  DeliveryAddress1: string;
  DeliveryAddress2: string;
  DeliveryCity: string;
  DeliveryPinCode: string;
  DeliveryLandMark: string;
  IsCanceled: boolean;
}
