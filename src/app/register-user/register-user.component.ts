import { Component, OnInit } from '@angular/core';
import { ManagementServiceService } from '../management-service.service';
import { Router } from '@angular/router';
import { Result } from '../Result';
import { User } from '../User';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  isSelected: string = "USER";
  user = new User();
  dob:any;
  // minAge:boolean;
  // maxAge:boolean;
  constructor(private service: ManagementServiceService, private router: Router) { }
  sliderArray: object[];

  ngOnInit(): void {

    this.service.getData().subscribe(
      (result: Result) => {
        this.sliderArray = result.sliderArray;
        console.log(this.sliderArray);

      }
    )

  }

  // onClickSubmit(form) {

  //   this.service.registerUser(this.user).subscribe(
  //     (success) => {
  //       console.log(success);
  //       alert(" Details Added Successfully");
  //       this.router.navigate(['/login']);
  //     },
  //     (error) => {
  //       alert("User Name or Email or Number Already Exist");
  //     }

  //   )
  // }
  onClickSubmit(form) {

    const today = new Date();
    const birthDate = new Date(this.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.user.age = age;
    console.log("age",this.user.age);
    // if(this.user.age<11){
    //   let min = document.getElementById('minAge');
    //   if(min != null){
    //     min.hidden = false;
    //   }
    // }
    // else if(this.user.age>120){
    //   document.getElementById('maxAge').style.display = 'block';
    // }
    // else{
    this.service.registerUser(this.user).subscribe(
      (success) => {
        console.log(success);
        if(success.message === "UserName Already Exist")
        {
        alert("User Name or Email or Number Already Exist");
        }
        else{
          alert(" Details Added Successfully");
          this.router.navigate(['/login']);
        }
    
      },
      (error) => {
        alert("User Name or Email or Number Already Exist");
      }

    )
  }

}
