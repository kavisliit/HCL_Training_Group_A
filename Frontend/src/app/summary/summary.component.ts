import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../Booking';
import { BookingService } from '../Booking.service';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  id!: number
  places!: Place[]
  vehicle!: Vehicle
  book!: Booking
  vid!: number
  constructor(private placeservive: PlaceService, private router: Router, private route: ActivatedRoute, private bookservice: BookingService, private vehicleservice: VehicleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getlist()
    this.getdata()

  }

  getdata() {
    this.bookservice.getOneBooking(this.id).subscribe(data => {
      let v: Booking = <Booking>data
      this.vid = v.vbookid
      this.book = v
      this.getvehicle()
    }, err => {
      console.log(err)
    })
  }

  getvehicle() {
    this.vehicleservice.getOneVehicle(this.vid).subscribe(data => {
      let s: Vehicle = <Vehicle>data
      this.vehicle = s
      console.log(this.vehicle)
    }, err => {
      console.log(err)
    })
  }
  getlist() {
    if (localStorage.getItem("cart")) {
      let data: any = localStorage.getItem("cart")
      let arr = JSON.parse(data)
      this.places = arr
    }
  }

  finish() {
    localStorage.removeItem("cart")
    localStorage.setItem("book", "false")
    this.router.navigate(["home"])
  }

}
