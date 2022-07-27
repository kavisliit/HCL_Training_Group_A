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
  sdate!: string
  edate!: string
  vehicle!: Vehicle
  book: Vehicle_books = new Vehicle_books()
  constructor(private vehiclebook: Vehicle_Book, private vehicleService: VehicleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getData()
  }


  checkavailable() {
    this.book.sdate = new Date(this.sdate)
    this.book.edate = new Date(this.edate)
    this.book.vid = Number(this.id)
    this.book.userid = 25
    this.vehiclebook.addbooking(this.book).subscribe(data => {
      let v: Vehicle_books = <Vehicle_books>data
      console.log(v)
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
