import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  nav: boolean = true
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("aid")) {
      location.href = "adminlogin"
    }
  }
  showvehicle() {
    this.router.navigate(["vehicletable"])
  }

  travelGuide(){
    this.router.navigate(['addTravelGuide'])
  }
  
  showplace() {
    this.router.navigate(["placetable"])
  }

}
