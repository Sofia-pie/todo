import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { SharedModule } from '../shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

registerLocaleData(localeUk);

@NgModule({
  declarations: [TasksComponent, CreateTasksComponent, TaskComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
