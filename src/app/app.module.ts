import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainPageModule } from './main-page/main-page.module';
import { AuthGuardService } from './core/guards/auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, MainPageModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
