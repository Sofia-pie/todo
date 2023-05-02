import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PriorityLevelPipe } from './pipes/priority-level.pipe';

@NgModule({
  declarations: [HeaderComponent, PriorityLevelPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, PriorityLevelPipe],
})
export class SharedModule {}
