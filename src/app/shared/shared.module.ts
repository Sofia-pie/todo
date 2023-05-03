import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PriorityLevelPipe } from './pipes/priority-level.pipe';
import { FormsModule } from '@angular/forms';
import { SortTasksPipe } from './pipes/sort-tasks.pipe';

@NgModule({
  declarations: [HeaderComponent, PriorityLevelPipe, SortTasksPipe],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, PriorityLevelPipe, SortTasksPipe],
})
export class SharedModule {}
