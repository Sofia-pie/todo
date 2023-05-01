import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SideElementsComponent } from './side-menu/side-elements/side-elements.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    SideMenuComponent,
    TasksComponent,
    SideElementsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainPageRoutingModule,
    RouterModule,
    FormsModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
