import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  vehic!: Vehicle;
  s1!: boolean;
  s2!: boolean;
  s3!: boolean;
  s4!: boolean;
  s5!: boolean;



  constructor(private vehicleService: VehicleService, private router: Router) {

  }

  ngOnInit(): void {

  }

  setcheckboxs() {
    if (this.s1 === true) {
      this.vehicle.ac = "y"
    }
    else {
      this.vehicle.ac = "n"
    }

    if (this.s2 === true) {
      this.vehicle.babyseat = "y"
    }
    else {
      this.vehicle.babyseat = "n"
    }

    if (this.s3 === true) {
      this.vehicle.fridge = "y"
    }
    else {
      this.vehicle.fridge = "n"
    }

    if (this.s4 === true) {
      this.vehicle.food = "y"
    }
    else {
      this.vehicle.food = "n"
    }


    if (this.s5 === true) {
      this.vehicle.music = "y"
    }
    else {
      this.vehicle.music = "n"
    }

  }



  save() {
    this.setcheckboxs()

  }

  submit() {
    this.save();
    this.vehicleService.createVehicle(this.vehicle).subscribe((data) => {
      let v: Vehicle = JSON.parse(JSON.stringify(data))
      this.router.navigate(["addvehiclepic", v.id])
    }, error => {
      console.log(error)
    })

  }



}
