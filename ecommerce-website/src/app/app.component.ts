import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './services/master.service';
import { APIResponseModel, Customer } from './modal/Products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce-website';
  @ViewChild('registerModel') model: ElementRef | undefined;

  masterService = inject(MasterService);
  user: Customer = new Customer();

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

  registerUser() {
    this.masterService
      .registerUser(this.user)
      .subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert('User Created Successfully');
          this.closeModel();
        } else {
          alert('Error creating the user!!');
        }
      });
  }
}
