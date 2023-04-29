import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from '../../core/model/user';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  @Input() user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onDropdownClick() {
    console.log('click');
    this.showMenu = !this.showMenu;
  }
  onLogoutClick() {
    this.authService.logout();
  }
}
