import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-one-vehicle',
  templateUrl: './one-vehicle.component.html',
  styleUrls: ['./one-vehicle.component.css']
})
export class OneVehicleComponent implements OnInit {
  id!: number
  mimage!: string
  fimage!: string
  bimage!: string
  iimage!: string
  vehicle!: Vehicle
  constructor(private vehicleService: VehicleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getData()
  }


  bookvehicle() {
    this.router.navigate(["bookvehicle", this.id])
  }
  changepic(type: string) {
    var temp;
    if (type === "f") {
      temp = this.mimage
      this.mimage = this.fimage
      this.fimage = temp
    } else if (type === "b") {
      temp = this.mimage
      this.mimage = this.bimage
      this.bimage = temp
    } else if (type === "i") {
      temp = this.mimage
      this.mimage = this.iimage
      this.iimage = temp
    }
  }
  getData() {
    this.vehicleService.getOneVehicle(this.id).subscribe(data => {
      let v: Vehicle = <Vehicle>data
      this.vehicle = v
      this.mimage = this.vehicle.mimage
      this.fimage = this.vehicle.fimage
      this.bimage = this.vehicle.bimage
      this.iimage = this.vehicle.iimage
    }, err => {
      console.log(err)
    })
  }

}
