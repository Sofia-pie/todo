import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../core/services/list.service';
import { List } from '../core/model/list';
import { Task } from '../core/model/task';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  category: string;

  pageTitle: string = '';
  tasks: Task[];
  currentList: List;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data['category'] !== 'id') {
        this.pageTitle = data['category'];
      }
    });
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.listService.getListById(id).subscribe((res) => {
          this.currentList = res;
          this.pageTitle = this.currentList.title;
          this.tasks = res.tasks;
        });
      }
    });
  }

  createTask(task: Task) {
    this.taskService.createTask(task).subscribe((res) => {
      console.log(res);
      this.tasks.push(res);
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task._id!).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t._id !== task._id);
    });
  }
}
