import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from './services/master.service';
import {
  APIResponseModel,
  CartProductResponse,
  Customer,
  User,
} from './modal/Products';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from './constants/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ecommerce-website';
  @ViewChild('registerModel') model: ElementRef | undefined;
  @ViewChild('loginModel') loginModel: ElementRef | undefined;

  masterService = inject(MasterService);
  registerUserInfo: Customer = new Customer();
  loginUserInfo: User = new User();
  loggedInUserInfo: Customer = new Customer();
  isCartOpen: boolean = false;
  cartProducts = signal<CartProductResponse[]>([]);

  loginUserForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.loggedInUserInfo = this.masterService.loggedInUserInfo;

    if (this.loggedInUserInfo.CustId !== 0) {
      this.getCartItems();
    }

    this.masterService.onCartAdded.subscribe((res: boolean) => {
      this.getCartItems();
    });
  }

  loginUser() {
    this.loginUserInfo.UserName = this.loginUserForm.value.username;
    this.loginUserInfo.UserPassword = this.loginUserForm.value.password;

    this.masterService
      .loginUser(this.loginUserInfo)
      .subscribe((res: APIResponseModel) => {
        if (res.message === 'Login Successful') {
          localStorage.setItem(routes.LOCAL_KEY, JSON.stringify(res.data));
          this.loggedInUserInfo = res.data;
          this.closeLoginModel();
          this.getCartItems();
        } else {
          alert('Invalid Credentials');
        }
      });
  }

  registerUser() {
    this.masterService
      .registerUser(this.registerUserInfo)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('User Created Successfully');
          this.closeModel();
        } else {
          alert('Error creating the user!!');
        }
      });
  }

  logOffUSer() {
    localStorage.removeItem(routes.LOCAL_KEY);
    this.loggedInUserInfo = new Customer();
  }

  openLoginModel() {
    if (this.loginModel != null) {
      this.loginModel.nativeElement.style.display = 'block';
    }
  }
  closeLoginModel() {
    if (this.loginModel != null) {
      this.loginModel.nativeElement.style.display = 'none';
    }
  }

  openModel() {
    if (this.model != null) {
      this.model.nativeElement.style.display = 'block';
    }
  }

  closeModel() {
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  showCartPopUp() {
    this.isCartOpen = !this.isCartOpen;
  }

  getCartItems() {
    this.masterService
      .showCartItems(this.loggedInUserInfo?.custId ?? 0)
      .subscribe((res: APIResponseModel) => {
        this.cartProducts.set(res.data);
      });
  }

  removeProduct(prodId: number) {
    this.masterService
      .deleteProductFromCartById(prodId)
      .subscribe((res: APIResponseModel) => {
        if (res.result === true) {
          alert('product removed from cart');
          this.getCartItems();
        } else {
          alert(`Error: in removing item ${res.data}`);
        }
      });
  }
}
