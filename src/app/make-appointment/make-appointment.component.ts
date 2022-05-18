import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { DiagnosticTest } from '../DiagnosticTest';
import { ManagementServiceService } from '../management-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from '../Appointment';
import { format } from 'url';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {
  centerId:number;
  centerList:DiagnosticCenter[];
  testList:DiagnosticTest[];
  userId:number;
  appointment:Appointment;

  constructor(private service:ManagementServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getAllCenters().subscribe(
      (data)=>{
          this.centerList=data.centerList;         
      }
    )
    this.activatedRoute.params.subscribe(
      (param)=>
      {
       this.userId=param['userId'];
      }
      )

  }
  onClickSubmit(centerId)
  {
    this.centerId=centerId;
    this.service.getCenterById(centerId).subscribe(
      (data)=>{
        this.testList=data.tests;
        
      }
    )
  
  }
  
  getFormData(appointment){
    this.appointment=appointment;
    this.appointment.userId=this.userId;
    console.log("object",this.appointment.dateTime)
    this.service.makeAppointment(this.centerId,this.appointment).subscribe(
      (success)=> {
        alert("Your appointment is booked with appointment id: "+success.appointmentId);
      },
      (error)=>{
        alert("Slot Not Available");
      }
    );
  }


  goBack()
  {
    this.router.navigate(["/customer/"+this.userId]);
  }
}
