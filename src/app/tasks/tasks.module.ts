import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, CreateTasksComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
