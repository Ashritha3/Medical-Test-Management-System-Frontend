import { Component, OnInit } from '@angular/core';
import { ManagementServiceService } from '../management-service.service';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-center',
  templateUrl: './remove-center.component.html',
  styleUrls: ['./remove-center.component.css']
})
export class RemoveCenterComponent implements OnInit {

  centerObj = new DiagnosticCenter();
  centerList:DiagnosticCenter[];
  cId:number;

  constructor(private service:ManagementServiceService,private router:Router) { }

  ngOnInit(): void {
     this.service.getAllCenters().subscribe(
       (data)=>{
           this.centerList=data.centerList;         
       }
     )
  }
  onClickSubmit(center)
  {
     this.service.getCenterByName(center.centerName).subscribe(
       (data)=>{
         this.centerObj = data;
        //  console.log("object",this.centerObj.centerId);
         this.cId = this.centerObj.centerId;
           this.service.removeCenter(this.cId).subscribe(
            (success)=>{
              alert("Center With Id : "+this.cId+" is Removed");
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
  
goBack()
{
  this.router.navigate(['admin']);
}

}
