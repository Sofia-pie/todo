import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/model/task';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css'],
})
export class CreateTasksComponent implements OnInit {
  @Input() listId: string;
  @Output() createTask: EventEmitter<Task> = new EventEmitter();

  showCommentField = false;
  taskForm: FormGroup;
  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      due_date: ['', Validators.required],
      completed: [false],
      description: [''],
      priority: [1],
      list_id: [''],
    });
  }

  onEnter(event: any) {
    event.preventDefault();
    if (this.taskForm.valid) {
      const task: Task = { ...this.taskForm.value, list_id: this.listId };

      this.createTask.emit(task);
      this.taskForm.reset();
    }
  }
}
