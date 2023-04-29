import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { User } from '../core/model/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }

  ngOnInit(): void {}
}
