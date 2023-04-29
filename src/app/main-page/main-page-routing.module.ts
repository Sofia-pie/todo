import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { TasksComponent } from './tasks/tasks.component';

const authRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'important',
        component: TasksComponent,
        data: { category: 'important' },
      },
      { path: 'today', component: TasksComponent, data: { category: 'today' } },
      {
        path: 'planned',
        component: TasksComponent,
        data: { category: 'planned' },
      },

      {
        path: '',
        pathMatch: 'full',
        component: TasksComponent,
        data: { category: 'notes' },
      },
      { path: ':id', component: TasksComponent, data: { category: 'id' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
