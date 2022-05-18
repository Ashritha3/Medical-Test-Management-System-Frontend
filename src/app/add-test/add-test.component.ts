import { Component, OnInit } from '@angular/core';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { ManagementServiceService } from '../management-service.service';
import { DiagnosticTest } from '../DiagnosticTest';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  
  // centerId:string;
  // status:boolean;
  // centerList:DiagnosticCenter[];
  // form:NgForm;
  test:DiagnosticTest;
  constructor(private service:ManagementServiceService,private router:Router) { }

  ngOnInit(): void {

    // this.service.getAllCenters().subscribe(
    //   (data)=>{
    //       this.centerList=data.centerList;        
    //   }
    // )
     
  }

  onClickSubmit(test)
  {   
      console.log(test);
      this.service.addTest(test).subscribe(
        (success)=>{
          console.log(success)
        if(success.message === "Test Already Exist")
        {
          alert("Test is Already Exist");
        }
        else{
        alert("Test With Name : "+ success.testName +" is added");
        }
        },
        (error)=>{
          alert("Test is Already Exist");
        }
       )
      //  this.form.reset();
  }

  // addTestByObject(test)
  // {
  //     this.service.addTest(this.centerId,test).subscribe(
  //       (success)=>{
  //                 alert(success.testId+" is Added Successfully");
  //       },
  //       (error)=>{
  //                 alert(test.testName+" is Already Exist in Center "+this.centerId);
  //       }
  //     );
  // }

  goBack()
  {
        this.router.navigate(['admin']);
  }
}
