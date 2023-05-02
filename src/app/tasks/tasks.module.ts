import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, CreateTasksComponent, TaskComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [TasksComponent],
})
export class TasksModule {}
