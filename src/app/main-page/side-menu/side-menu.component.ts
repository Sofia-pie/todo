import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../../core/services/list.service';
import { List } from '../../core/model/list';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  isList: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }

  constructor() {}

  ngOnInit(): void {}
}
