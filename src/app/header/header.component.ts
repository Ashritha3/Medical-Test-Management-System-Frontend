import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentDate:string="";
  public currentTime:string="";
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.showDate();
    },1000);
  }
  showDate()
  {
    this.currentDate=new Date().toDateString();
    this.currentTime=new Date().toLocaleTimeString();
  }

  register()
  {
    this.router.navigate(['/register']);
  }
  login()
  {
    this.router.navigate(['/login']);
  }


}
