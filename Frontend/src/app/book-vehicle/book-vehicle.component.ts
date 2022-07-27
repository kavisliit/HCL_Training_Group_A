import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';
import { Vehicle_books } from '../Vehicle_book';
import { Vehicle_Book } from '../Vehicle_Book.service';

@Component({
  selector: 'app-book-vehicle',
  templateUrl: './book-vehicle.component.html',
  styleUrls: ['./book-vehicle.component.css']
})
export class BookVehicleComponent implements OnInit {

  id!: number
  uid!: number
  sdate!: string
  edate!: string
  vehicle!: Vehicle
  valid!: boolean
  book: Vehicle_books = new Vehicle_books()
  constructor(private vehiclebook: Vehicle_Book, private vehicleService: VehicleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.uid = Number(localStorage.getItem("uid"))
    this.getData()
  }


  checkavailable() {

    let brand = document.getElementById("sdates")
    let inp = document.getElementById("sdate")
    if (!this.sdate) {


      if (brand && inp) {
        brand.innerHTML = "Please Select the Start date"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }


    brand = document.getElementById("edates")
    inp = document.getElementById("edate")
    if (!this.edate) {


      if (brand && inp) {
        brand.innerHTML = "Please Select the End date"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    this.book.sdate = new Date(this.sdate)
    this.book.edate = new Date(this.edate)
    this.book.vid = Number(this.id)
    this.vehiclebook.checkavailable(this.book).subscribe(data => {
      var res: boolean = <boolean>data

      var result = document.getElementById("result")
      if (result) {
        if (res) {
          result.classList.remove("invalidc")
          result.classList.add("validc")
          result.innerHTML = "Vehicle is Available"
          this.valid = true
        }
        else {
          result.classList.remove("validc")
          result.classList.add("invalidc")
          result.innerHTML = "Vehicle is Not Available"
          this.valid = false
        }
      }
    }, err => {
      console.log(err)
    })

  }

  bookvehicle() {

    this.book.userid = this.uid
    this.vehiclebook.addbooking(this.book).subscribe(data => {
      let v: Vehicle_books = <Vehicle_books>data
      alert("Vehicle Booked Successfully")
      this.router.navigate(["allvehicle"])
    }, err => {
      console.log(err)
    })
  }

  getData() {
    this.vehicleService.getOneVehicle(this.id).subscribe(data => {
      let v: Vehicle = <Vehicle>data
      console.log(v)
      this.vehicle = v
    }, err => {
      console.log(err)
    })
  }

}
