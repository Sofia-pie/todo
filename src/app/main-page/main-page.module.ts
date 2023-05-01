import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SideElementsComponent } from './side-menu/side-elements/side-elements.component';
import { FormsModule } from '@angular/forms';
import { TasksModule } from '../tasks/tasks.module';

@NgModule({
  declarations: [MainPageComponent, SideMenuComponent, SideElementsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TasksModule,
    MainPageRoutingModule,
    RouterModule,
    FormsModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
