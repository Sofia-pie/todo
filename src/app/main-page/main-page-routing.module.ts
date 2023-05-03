import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { TasksComponent } from '../tasks/tasks.component';

const authRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'important',
        component: TasksComponent,
        data: { category: 'Важливі' },
      },
      {
        path: 'today',
        component: TasksComponent,
        data: { category: 'На сьогодні' },
      },
      {
        path: 'planned',
        component: TasksComponent,
        data: { category: 'Заплановані' },
      },
      {
        path: 'search',
        component: TasksComponent,
        data: { category: 'Пошук' },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'today',
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
