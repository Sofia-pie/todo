import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    RegisterComponent,
    AuthComponent,
    StartComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [JwtHelperService],
  exports: [AuthComponent],
})
export class AuthModule {}
