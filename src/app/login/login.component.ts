import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ManagementServiceService } from '../management-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user=new User();
  redirect:boolean=false;
  constructor(private service:ManagementServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(form)
  {
    this.service.loginUser(this.user).subscribe(
       (success)=>{
         alert(success.userRole+" Logined Successfully")
        
         if(success.userRole=="ADMIN")
         {
           this.route.navigate(['/admin'])
         }
         else
         {
           this.route.navigate(["/customer/"+success.userId])
         }
         
       },
       (error)=>{
          alert("Invalid UserName or Password");
       }

    )
  }

  signUp()
  {
    
    this.route.navigate(['/register'])
  }
  
}
