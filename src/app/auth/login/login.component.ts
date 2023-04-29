import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.authService
      .login(this.email, this.password)
      .subscribe({ complete: () => this.router.navigate(['/main']) });
  }
}
