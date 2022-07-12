import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from 'shared/service/token-interceptor/token-interceptor.service';
import { ComponentsModule } from 'shared/components/components.module';
import {MatSelectModule} from '@angular/material/select';
import { PageComponent } from './Page/page.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    ComponentsModule,
    MatSelectModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    PageComponent

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
