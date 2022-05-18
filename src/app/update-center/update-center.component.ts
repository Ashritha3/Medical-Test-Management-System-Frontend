import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../Appointment';
import { DiagnosticCenter } from '../DiagnosticCenter';
import { DiagnosticCenterList } from '../DiagnosticCenterList';
import { DiagnosticTest } from '../DiagnosticTest';
import { ManagementServiceService } from '../management-service.service';


@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css']
})
export class UpdateCenterComponent implements OnInit {

  centerList: DiagnosticCenter[] = [];
  testList:DiagnosticTest[] = [];
  appointment:Appointment[]=[];
  // product: Product = new Product(0,"", new Category(0,'',''), "", 0);
  center = new DiagnosticCenter();
  centerId: number;

  message: string = '';
  success: boolean = false;

  constructor(private service:ManagementServiceService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // this.service.getAllCenters().subscribe(
    //   (data)=>{
    //       this.centerList=data.centerList;         
    //   }
    // )

    this.service.getAllCenters().subscribe(data => {
      console.log(data);
      this.centerList = data.centerList;
    });
  }

  onClickSubmit(){

    let cName: string = this.center.centerName
    //console.log(categoryName);
    // this.categories.forEach(category => {
    //   if(category.name === categoryName) {
    //     this.product.category.categoryId = category.categoryId;
    //   }
    // });

    // this.activatedRoute.params.subscribe(data => {
    //   this.centerId = data.id;
    //   this.service.getCenterById(centerId).subscribe(response => {
    //     console.log(response);
    //     this.center = response;

    //   });

    this.service.getCenterByName(cName).subscribe(
      (data)=>{
      this.centerId = data.centerId;
      this.testList = data.tests;
      this.appointment = data.appointments;
      this.center = data;
    this.service.update(this.center).subscribe(data => {
      console.log('response',data);
      if(data) {
        this.success = true;
        this.message = "Center updated successfully";
        
      }
      else {
        this.success = false;
        this.message = "Center updating data";
      }

    })
  });

  }

  goBack()
{
  this.router.navigate(['admin']);
}
}
