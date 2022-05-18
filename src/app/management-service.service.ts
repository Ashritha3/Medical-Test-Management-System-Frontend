import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiagnosticTest } from './DiagnosticTest';
import { DiagnosticCenter } from './DiagnosticCenter';
import { Observable } from 'rxjs';
import { Appointment } from './Appointment';
import { User } from './User';
import { DiagnosticCenterList } from './DiagnosticCenterList';
import { DiagnosticTestList } from './DiagnosticTestList';
import { AppointmentList } from './AppointmentList';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {
  
  constructor(private http:HttpClient) { }
  
  baseUrl:string="http://localhost:9191/";
   
  getData() {
    return this.http.get("../assets/slideData.json")
  }
   
  public loginUser(user:User):Observable<User>
  {
    console.log(this.baseUrl+"login");
    return this.http.post<User>(this.baseUrl+"login",user);
  } 

  public registerUser(user:User):Observable<any>
  {
    console.log(this.baseUrl+"register");
    return this.http.post<User>(this.baseUrl+"register",user);
  } 


  public addCenter(center:DiagnosticCenter):Observable<any>
  { 
       console.log(this.baseUrl+"addcenter");
       return this.http.post<any>(this.baseUrl+"addcenter",center);
  }


  public removeCenter(centerId:number):Observable<any>
  {
     console.log(this.baseUrl+"removecenter/center-id/"+centerId);
     return this.http.delete(this.baseUrl+"removecenter/center-id/"+centerId);
      
  }

  public addTest(test:DiagnosticTest):Observable<any>
  {
    console.log(this.baseUrl+"addtest");    
    return this.http.post<any>(this.baseUrl+"addtest",test);
  }

  public removeTest(testId:number):Observable<any>
  {
     console.log(this.baseUrl+"removetest/by-id/"+testId);
     return this.http.delete(this.baseUrl+"removetest/by-id/"+testId);
      
  }

  public getAllTests():Observable<DiagnosticTestList>
  {
    console.log(this.baseUrl+"getalltests");
    return this.http.get<DiagnosticTestList>(this.baseUrl+"getalltests");
  }
  
  public getCenterById(centerId:number):Observable<DiagnosticCenter>
  {
    console.log(this.baseUrl+"getcenterbyid/"+centerId); 
    return this.http.get<DiagnosticCenter>(this.baseUrl+"getcenterbyid/"+centerId);
  }

  public getCenterByName(centerName:string):Observable<any>
  {
    console.log(this.baseUrl+"getcenter/"+centerName); 
    return this.http.get<any>(this.baseUrl+"getcenter/"+centerName);
  }

  public getTestByName(testName:string):Observable<any>
  {
    console.log(this.baseUrl+"gettest/"+testName); 
    return this.http.get<any>(this.baseUrl+"gettest/"+testName);
  }

  public update(center:DiagnosticCenter):Observable<DiagnosticCenter>
  {
    console.log(this.baseUrl+"/updatecenter/"+center.centerId,center);    
    return this.http.put<DiagnosticCenter>(this.baseUrl+"/updatecenter/"+center.centerId,center);
  }
  public assignTestId(centerId:number,test:DiagnosticTest):Observable<DiagnosticCenter>
  {
    console.log(this.baseUrl+"assigntest/"+centerId);    
    return this.http.put<DiagnosticCenter>(this.baseUrl+"assigntest/"+centerId,test);
  }
 
  public removeTestByName(centerId:number ,testName:string):Observable<any>
  { 
     console.log(this.baseUrl+"center/"+centerId+"/removetest/"+testName);
     return this.http.delete(this.baseUrl+"center/"+centerId+"/removetest/"+testName);
  }

  
  public makeAppointment(centerId:number,appointment:Appointment):Observable<Appointment>
  {
    console.log(this.baseUrl+"makeappointment/"+centerId,appointment);  
    return this.http.post<Appointment>(this.baseUrl+"makeappointment/"+centerId,appointment);
  }
  
  public getAllCenters():Observable<DiagnosticCenterList>
  {
    console.log(this.baseUrl+"getallcenters");
    return this.http.get<DiagnosticCenterList>(this.baseUrl+"getallcenters");
  }
  
  public approveAppointment(appointmentId:number,status:boolean):Observable<Appointment>
  {
    console.log(this.baseUrl+"admin/approveAppointment/"+appointmentId+"/"+status);
    return this.http.put<Appointment>(this.baseUrl+"admin/approveAppointment/"+appointmentId+"/"+status,null);
  }

  public getAppointmentById(appointmentId:number):Observable<Appointment>
  {
       console.log(this.baseUrl+"getappointment/"+appointmentId); 
       return this.http.get<Appointment>(this.baseUrl+"getappointment/"+appointmentId);
  }

  public getUserById(userId:number):Observable<User>
  {
    console.log(this.baseUrl+"users/"+userId); 
    return this.http.get<User>(this.baseUrl+"users/"+userId);
  }
   
  public getAllAppointmentsByCenterId(centerId:number):Observable<AppointmentList>
  {
    console.log(this.baseUrl+"admin/getallappointments/"+centerId);    
    return this.http.get<AppointmentList>(this.baseUrl+"admin/getallappointments/"+centerId);
  }

  // public getAllTestsByCenterId(centerId:string):Observable<DiagnosticTestList>
  // {
  //   console.log(this.baseUrl+"getalltestsby-centerid/"+centerId);
  //   return this.http.get<DiagnosticTestList>(this.baseUrl+"getalltestsby-centerid/"+centerId);
  // }

 }
