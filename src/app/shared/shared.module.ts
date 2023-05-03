import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PriorityLevelPipe } from './pipes/priority-level.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, PriorityLevelPipe],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, PriorityLevelPipe],
})
export class SharedModule {}
