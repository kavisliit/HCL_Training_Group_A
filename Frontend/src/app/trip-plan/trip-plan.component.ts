import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../Booking';
import { BookingService } from '../Booking.service';
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
  vid!: number
  havetrip: boolean = false
  have: boolean = false
  booking: Booking = new Booking()
  constructor(private vehiclebookservice: Vehicle_Book, private bookingservice: BookingService, private router: Router, private route: ActivatedRoute) { }

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

    if (localStorage.getItem("book")) {
      var s = localStorage.getItem("book")
      if (s == "false") {
        this.have = false
        return
      }
    }
    else {
      this.have = false
      return
    }
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





  booktrip() {
    if (localStorage.getItem("cart")) {
      let data: any = localStorage.getItem("cart")
      let arr = JSON.parse(data)
      if (arr.length == 0) {
        alert("Please select your destinations")
        return
      }
    }
    else {
      alert("Please select your destinations")
      return
    }
    if (!this.have) {
      alert("Please Select a Vehicle")
      return
    }
    this.booking.userid = this.uid
    this.booking.vbookid = this.vehicle.id
    this.bookingservice.createbooking(this.booking).subscribe(data => {
      let v: Booking = <Booking>data
      this.router.navigate(["summary", v.id])
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
