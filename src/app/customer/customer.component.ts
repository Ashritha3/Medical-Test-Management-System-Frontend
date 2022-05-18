import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  userId:number;
  constructor(private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    
  }

  logout()
  {
       this.route.navigate(['customer/login'])      
  }
}
