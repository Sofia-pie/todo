import { Component, OnInit } from '@angular/core';
import { ListService } from '../../../core/services/list.service';
import { List } from '../../../core/model/list';

@Component({
  selector: 'app-side-elements',
  templateUrl: './side-elements.component.html',
  styleUrls: ['./side-elements.component.css'],
})
export class SideElementsComponent implements OnInit {
  lists: List[];
  showListInput = false;
  newListTitle: string = '';
  newListDescription: string = '';
  errorMessage: string = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getLists().subscribe((l) => (this.lists = l));
  }

  onCreateClick() {
    this.showListInput = !this.showListInput;
  }

  createList() {
    if (!this.newListTitle.trim()) {
      this.errorMessage = 'Введіть назву списку';
      return;
    }
    const newList: List = {
      title: this.newListTitle.trim(),
      description: this.newListDescription.trim(),
      tasks: [],
    };
    this.listService.createList(newList).subscribe((res) => {
      this.lists.push(res);
      this.showListInput = false;
      this.newListTitle = '';
      this.newListDescription = '';
    });
  }
}
