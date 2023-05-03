import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from '../../core/model/user';
import { AuthService } from '../../core/services/auth.service';
import { Subject, debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  @Input() user: User;
  searchInput: string = '';
  inputSubject = new Subject<string>();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.inputSubject.pipe(debounceTime(1500)).subscribe(() => {
      this.search(this.searchInput);
    });
  }

  onDropdownClick() {
    console.log('click');
    this.showMenu = !this.showMenu;
  }
  onLogoutClick() {
    this.authService.logout();
  }
  search(query: string) {
    if (query === '') {
      this.router.navigate(['/main']);
      return;
    }
    this.router.navigate(['/main/search', { query: query }]);
  }
}
