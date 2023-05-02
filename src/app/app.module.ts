import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainPageModule } from './main-page/main-page.module';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/authconfig.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('jwt_token'),
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: [],
      },
    }),

    AppRoutingModule,
    AuthModule,
    MainPageModule,
  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
