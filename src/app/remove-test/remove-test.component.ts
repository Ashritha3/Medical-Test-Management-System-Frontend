import { Component, OnInit } from '@angular/core';
import { ManagementServiceService } from '../management-service.service';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { DiagnosticTest } from '../DiagnosticTest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-test',
  templateUrl: './remove-test.component.html',
  styleUrls: ['./remove-test.component.css']
})
export class RemoveTestComponent implements OnInit {

  testobj = new DiagnosticTest();
  testList:DiagnosticTest[];
  tId:number;
  
  constructor(private service:ManagementServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllTests().subscribe(
      (data)=>{
          this.testList=data.testList;      
      }
    )
  }
  onClickSubmit(test)
  {
    this.service.getTestByName(test.testName).subscribe(
      (data)=>{
        this.testobj = data;
       //  console.log("object",this.centerObj.centerId);
        this.tId = this.testobj.testId
          this.service.removeTest(this.tId).subscribe(
           (success)=>{
             alert("Test With Id : "+this.tId+" is Removed");
             this.ngOnInit();
           },
           (error)=>
           {
             alert("Unable to Delete");
           }
          )
      }
    );
  }

  // removeTest(testId)
  // {
  //        if(confirm("Are you Sure"))
  //            this.service.removeTest(this.centerId,testId).subscribe(
  //             (success)=>{
  //               alert(testId+ " is deleted")
  //               this.onClickSubmit(this.centerId);
  //             }

  //            )
          
  // }

  goBack()
  {
        this.router.navigate(['admin']);
  }
}
