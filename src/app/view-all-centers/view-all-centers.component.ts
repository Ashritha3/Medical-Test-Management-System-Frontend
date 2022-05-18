import { Component, OnInit } from '@angular/core';
import { AddCenterComponent } from '../add-center/add-center.component';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { ManagementServiceService } from '../management-service.service';
import { Router } from '@angular/router';
import { DiagnosticTest } from '../DiagnosticTest';

@Component({
  selector: 'app-view-all-centers',
  templateUrl: './view-all-centers.component.html',
  styleUrls: ['./view-all-centers.component.css']
})
export class ViewAllCentersComponent implements OnInit {

  centerId:number;
  status:boolean;
  mainTestList:DiagnosticTest[];
  centerList:DiagnosticCenter[];
  testList:DiagnosticTest[];
  test = new DiagnosticTest();
  constructor(private service:ManagementServiceService,private router:Router) { }

  ngOnInit() {
    this.service.getAllCenters().subscribe(
      (data)=>{
          this.centerList=data.centerList;        
      }
    )
    this.service.getAllTests().subscribe(
      (data)=>{
        this.mainTestList=data.testList;        
    }
    )
  }
  
onClickSubmit(centerId)
{
  this.centerId = centerId;
  this.service.getCenterById(centerId).subscribe(
    (data)=>{
      console.log(data);
      this.testList=data.tests;
    }
  )
}  

onClickSubmitForm()
{
  this.centerId;
  this.status=true;
}

addTestByObject(test)
  {
      this.service.assignTestId(this.centerId,test).subscribe(
        (success)=>{
                  alert(test.testName+" is Added Successfully");
                  window.location.reload();
        },
        (error)=>{
                  alert(test.testName+" is Already Exist in Center "+this.centerId);
        }
      );
  }
removeTest(testName)
  {
         if(confirm("Are you Sure"))
             this.service.removeTestByName(this.centerId,testName).subscribe(
              (success)=>{
                alert(testName+ " is deleted")
                this.onClickSubmit(this.centerId);
              }

             )
          
  }

goBack()
  {
        this.router.navigate(['admin']);
  }
}


/* Product[] = null;
constructor(private _service: ProductService) { }

ngOnInit() {
  this.products = this._service.getAllProducts();
}*/