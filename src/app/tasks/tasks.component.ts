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
  filterType: string;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.filterType = data['category'];
      if (data['category'] !== 'id') {
        this.pageTitle = data['category'];
      }
    });
    this.filterTasks();
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
  checkTaskDone(task: Task) {
    task.completed = true;
    this.taskService.updateTask(task._id!, task).subscribe((res) => {
      console.log(res);
      const index = this.tasks.findIndex((t) => t._id === task._id);
      if (index !== -1) {
        this.tasks[index].completed = true;
      }
    });
  }

  filterTasks(): void {
    switch (this.filterType) {
      case 'На сьогодні':
        this.taskService
          .getTasksForToday()
          .subscribe((tasks) => (this.tasks = tasks));
        break;
      case 'Заплановані':
        this.taskService
          .getTasksPlanned()
          .subscribe((tasks) => (this.tasks = tasks));
        break;
      case 'Важливі':
        this.taskService
          .getImportantTasks()
          .subscribe((tasks) => (this.tasks = tasks));
        break;
      case 'id':
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
        break;
      default:
        this.tasks = [];
    }
  }
}
