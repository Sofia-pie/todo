import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [MainPageComponent, SideMenuComponent, TasksComponent],
  imports: [CommonModule, SharedModule, MainPageRoutingModule, RouterModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
