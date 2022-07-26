import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  ch: boolean = false
  price!: number
  vehicles: Vehicle[] = [];
  type: string = ''
  brand: string = ''

  ngOnInit(): void {
    this.getData()
  }
  constructor(private vehicleService: VehicleService, private router: Router) {
    this.type = "no"
    this.brand = "no"
  }

  getData() {
    this.vehicleService.getAllVehicle().subscribe(data => {
      var list: Vehicle[] = <Vehicle[]>data
      this.vehicles = list

    }, err => {
      console.log(err)
    })
  }

  filterType(ev: any) {
    var fdata = new FormData()
    this.type = ev.target.value
    fdata.append("type", this.type)
    fdata.append("brand", this.brand)
    console.log(this.type, this.brand)
    this.vehicleService.filterVehicle(fdata).subscribe(data => {
      var v: Vehicle[] = <Vehicle[]>data
      this.vehicles = v
    }, err => {
      console.log(err)
    });

  }
  filterPrice() {
    if (!this.price) {
      alert("Please Enter Price")
      return
    }
    var fdata: FormData = new FormData()
    fdata.append("price", this.price.toString())
    this.vehicleService.filterByPrice(fdata).subscribe(data => {
      var v: Vehicle[] = <Vehicle[]>data
      this.vehicles = v
    }, err => {
      console.log(err)
    })

  }

  filterBrand(ev: any) {
    var fdata = new FormData()
    this.brand = ev.target.value
    fdata.append("type", this.type)
    fdata.append("brand", this.brand)
    console.log(this.type, this.brand)
    this.vehicleService.filterVehicle(fdata).subscribe(data => {
      var v: Vehicle[] = <Vehicle[]>data
      this.vehicles = v
    }, err => {
      console.log(err)
    });
  }

  reset() {
    this.ch = false
  }



}
