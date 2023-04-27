import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-up',
        component: RegisterComponent,
      },
      {
        path: 'sign-in',
        component: LoginComponent,
      },
      {
        path: '',
        component: StartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
