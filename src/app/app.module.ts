import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { RemoveCenterComponent } from './remove-center/remove-center.component';
import { AddTestComponent } from './add-test/add-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { NavComponent } from './nav/nav.component';
import { ViewAllCentersComponent } from './view-all-centers/view-all-centers.component';
import { UpdateCenterComponent } from './update-center/update-center.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    AddCenterComponent,
    RemoveCenterComponent,
    AddTestComponent,
    RemoveTestComponent,
    MakeAppointmentComponent,
    ApproveAppointmentComponent,
    AdminComponent,
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    ViewAppointmentComponent,
    NavComponent,
    ViewAllCentersComponent,
    UpdateCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
