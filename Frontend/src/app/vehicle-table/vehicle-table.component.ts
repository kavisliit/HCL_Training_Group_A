import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {

  vehicles!: Vehicle[];
  constructor(private vehicleService: VehicleService, private router: Router) { }
  vehicle: Vehicle = new Vehicle()
  ngOnInit(): void {
    if (!localStorage.getItem("aid")) {
      location.href = "adminlogin"
    }
    this.loadData()
  }

  loadData() {
    this.vehicleService.getAllVehicle().subscribe(data => {
      let v: Vehicle[] = <Vehicle[]>data
      this.vehicles = v
      console.log(this.vehicles)
    }, err => {
      console.log(err)
    });

  }


  deleteVehicle(id: number) {
    this.vehicleService.deleteVehicle(id).subscribe(data => {
      alert("Deleted successfully")
      this.loadData()
    }, err => {
      console.log(err)
    })
  }
  oneView(id: number) {

    this.router.navigate(["veiwone", id])


  }
  addvehicle() {
    this.router.navigate(["addvehicle"])
  }

  updateView(id: number) {
    this.router.navigate(["updatevehicle", id])
  }

}
