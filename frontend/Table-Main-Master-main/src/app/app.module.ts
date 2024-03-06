import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './shared/component/user/user.component';
import { CarComponent } from './shared/component/car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarUpdateComponent } from './shared/component/car-update/car-update.component';
import { CarGetAllComponent } from './shared/component/car-get-all/car-get-all.component';
import { CarGetByIdComponent } from './shared/component/car-get-by-id/car-get-by-id.component';
import { CarDeleteComponent } from './shared/component/car-delete/car-delete.component';
import { CarDetailsComponent } from './shared/component/car-details/car-details.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { RouterModule } from '@angular/router';
import { ErrorInterceptor } from './core/interceptor/ErrorInterceptor';
import { UnknowPageComponent } from './pages/unknow-page/unknow-page.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { BootstrapModalUpdateComponent } from './layout/bootstrap-modal-update/bootstrap-modal-update.component';
import { BootstrapModalDeleteComponent } from './layout/bootstrap-modal-delete/bootstrap-modal-delete.component';
import { CreateOwnerComponent } from './shared/component/create-owner/create-owner.component';
import { OwnerByIdComponent } from './shared/component/owner-by-id/owner-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CarComponent,
    CarUpdateComponent,
    CarGetAllComponent,
    CarGetByIdComponent,
    CarDeleteComponent,
    CarDetailsComponent,
    NavHeaderComponent,
    UnknowPageComponent,
    PageNotFoundComponent,
    BootstrapModalUpdateComponent,
    BootstrapModalDeleteComponent,
    CreateOwnerComponent,
    OwnerByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
