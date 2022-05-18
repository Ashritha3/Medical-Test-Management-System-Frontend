import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { ManagementServiceService } from '../management-service.service';
import { Appointment } from '../Appointment';
import { DiagnosticTest } from '../DiagnosticTest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-appointment',
  templateUrl: './approve-appointment.component.html',
  styleUrls: ['./approve-appointment.component.css']
})
export class ApproveAppointmentComponent implements OnInit {

  centerId:string;
  centerList:DiagnosticCenter[];
  // dList:Appointment[];
  center = new DiagnosticCenter();
  appointmentList:Appointment[];
  testList:DiagnosticTest[];
  
  constructor(private service:ManagementServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllCenters().subscribe(
      (data)=>{
          this.centerList=data.centerList;        
      }
    )
  }

  onClickSubmit(centerId)
  {
    this.centerId=centerId;
    this.service.getAllAppointmentsByCenterId(centerId).subscribe(
      (data)=>{
        console.log(data.appointmentList)
        if (data.appointmentList.length!=0){
          this.appointmentList=data.appointmentList;    
        } else {
           alert("No Appointments Avaliable")
        } 
      }
    )
  }

  approveAppointment(appointmentId,status)
  {
    this.service.approveAppointment(appointmentId,status).subscribe(
      (success)=>{
        alert("Appointment with Id : "+appointmentId + "is Successfully Approved")
        this.onClickSubmit(this.centerId);
      },
      (error)=>{
        alert(appointmentId + " is Unable to Approve")          
      }
    )
  }

  goBack()
  {
        this.router.navigate(['admin']);
  }
}
