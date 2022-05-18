import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Appointment';
import { ManagementServiceService } from '../management-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
 
  public userId:number;
  user = new User();
  appointment:Appointment;
   
  constructor(private service:ManagementServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param)=>
      {
       this.userId=param['userId']; 
      }
      );
      
  }
  searchAppointment(appointmentId)
  {
     
     this.service.getAppointmentById(appointmentId).subscribe(
       (success)=>{
         
         this.appointment=success;
        
         this.service.getUserById(this.appointment.userId).subscribe(
          (user)=>{
            this.user=user;                 
          }
        );
          
       },
       (error)=>{
          alert("Invalid Appointment Id");
          
       }
     )
  }

  goBack()
  {
    this.router.navigate(['/customer/'+this.userId]);
  }
}
