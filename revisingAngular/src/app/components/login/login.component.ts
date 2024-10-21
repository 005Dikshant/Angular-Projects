import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userInfo = {
    email: '',
    password: '',
  };

  router = inject(Router);

  login() {
    if (
      this.userInfo.email === 'dikshant@porn.com' &&
      this.userInfo.password === 'porn'
    ) {
      this.router.navigateByUrl('/master');
      localStorage.setItem('email', this.userInfo.email);
    } else {
      alert('Invalid Creditianls');
    }
  }
}
