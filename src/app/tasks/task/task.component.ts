import {
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from '../../core/model/task';
import { TaskService } from '../../core/services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  isChecked: boolean;
  showComfirmDialog = false;
  showComments = false;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() checkTaskDone: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.isChecked = this.task.completed;
  }

  onDeleteClick() {
    this.showComfirmDialog = true;
  }

  deleteTaskConfirm() {
    this.deleteTask.emit(this.task);
  }

  onCheckClick() {
    this.isChecked = true;
    this.checkTaskDone.emit(this.task);
  }
}
