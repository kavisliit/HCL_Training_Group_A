import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { Vehicle_Book } from '../Vehicle_Book.service';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrls: ['./trip-plan.component.css']
})
export class TripPlanComponent implements OnInit {
  uid!: number
  vehicle!: Vehicle
  have: boolean = false
  constructor(private vehiclebookservice: Vehicle_Book, private router: Router, private route: ActivatedRoute) { }

  showvehicle() {
    this.router.navigate(["allvehicle"])
  }

  ngOnInit(): void {
    if (!localStorage.getItem("uid")) {
      location.href = "login"
    }
    this.uid = Number(localStorage.getItem("uid"))
    this.checkBookings()
  }

  checkBookings() {
    this.vehiclebookservice.checkBookHave(this.uid).subscribe(data => {
      var v: Vehicle = <Vehicle>data
      if (v) {
        this.vehicle = v
        this.have = true
      } else {
        this.have = false
      }
    }, err => {
      console.log(err)
    })
  }

}
