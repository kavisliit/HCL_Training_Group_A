import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private router: Router) {

  }

  ngOnInit(): void {
    if (!localStorage.getItem("uid")) {
      location.href = "login"
    }

  }

  plantrip() {
    this.router.navigate(["plantrip"])
  }

}
