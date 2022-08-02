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
  pic!: string
  havetrip: boolean = false
  have: boolean = false
  constructor(private vehiclebookservice: Vehicle_Book, private router: Router, private route: ActivatedRoute) { }

  showvehicle() {
    this.router.navigate(["allvehicle"])
  }

  showplace() {
    this.router.navigate(["placelist"])
  }

  ngOnInit(): void {
    if (!localStorage.getItem("uid")) {
      location.href = "login"
    }
    this.uid = Number(localStorage.getItem("uid"))
    this.checkBookings()
    this.checkdestinations()
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

  checkdestinations() {
    if (localStorage.getItem("cart")) {
      let data: any = localStorage.getItem("cart")
      let arr = JSON.parse(data)
      this.pic = arr[0].mimage
      this.havetrip = true
    }
    else {
      this.havetrip = false
    }
  }

}
