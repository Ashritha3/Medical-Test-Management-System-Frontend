import { Component, OnInit } from '@angular/core';
import { ManagementServiceService } from '../management-service.service';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {

  center:DiagnosticCenter;
  message:string;

  constructor(private service:ManagementServiceService,private router:Router) { }

 ngOnInit(): void {
  }

  // onClickSubmit(center)
  // {  
  //   this.service.addCenter(center).subscribe(
  //     (success)=>{
  //       console.log(success)
  //       alert("Center With Id : "+ success.centerName +" is added");
  //     },
  //     (error)=>{
  //       alert("Center is Already Exist");
  //     }
  //    )
  // }

  onClickSubmit(center)
  {  
    this.service.addCenter(center).subscribe(
      (success)=>{
        console.log(success)
        if(success.message === "Center Already Exist")
        {
          alert("Center is Already Exist");
        }
        else{
        alert("Center With Name : "+ success.centerName +" is added");
        }
      },
      (error)=>{
        alert("Center is Already Exist");
      }
     )
  }

  goBack()
  {
      this.router.navigate(['admin']);
  }
}
