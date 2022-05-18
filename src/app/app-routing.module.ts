import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { RemoveCenterComponent } from './remove-center/remove-center.component';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { AddTestComponent } from './add-test/add-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { NavComponent } from './nav/nav.component';
import { ViewAllCentersComponent } from './view-all-centers/view-all-centers.component';


const routes: Routes = [
  {
     path: "" ,redirectTo:'/home', pathMatch: "full"
  }, 
  // {
  //   path : "home"             ,component : AppComponent
  // },
  {
    path : "login"             ,component : LoginComponent
  },
  {
    path : "customer/login"             ,component : LoginComponent
  },
  {
    path : "admin/login"             ,component : LoginComponent
  },
  {
    path : "register"          ,component : RegisterUserComponent
  },
  {
    path : "admin/addcenter"         ,component : AddCenterComponent
  }, 
  {
    path : "updatecenter"         ,component : UpdateCenterComponent
  }, 
  {
    path : "admin/removecenter"   ,component : RemoveCenterComponent
  },
  {
    path : "admin/addtest"           ,component : AddTestComponent
  },
  {
    path : "admin/removetest"        ,component :RemoveTestComponent
  },
  {
    path : "customer/:userId/makeappointment"   ,component :MakeAppointmentComponent
  },
  {
    path : "admin/approveappointment",component : ApproveAppointmentComponent
  },
  {
    path :"admin"              ,component :AdminComponent
  },
  {
    path : "customer/:userId"  ,component: CustomerComponent
  },
  {
    path : "customer/:userId/viewappointment"   ,component :ViewAppointmentComponent
  },
  {
    path : "customer/:userId/login"   ,component :CustomerComponent
   },
   {
     path : "home"               ,component : NavComponent
   },
   {
    path : "admin/getAllCenters"        ,component :ViewAllCentersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
