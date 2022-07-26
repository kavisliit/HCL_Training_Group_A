import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  id!: number
  s1!: boolean;
  s2!: boolean;
  s3!: boolean;
  s4!: boolean;
  s5!: boolean;
  vehicle!: Vehicle
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getData()
  }
  constructor(private vehicleService: VehicleService, private router: Router, private route: ActivatedRoute) { }


  getData() {
    this.vehicleService.getOneVehicle(this.id).subscribe(data => {
      let v: Vehicle = <Vehicle>data
      this.vehicle = v
      if (this.vehicle.ac === 'y') {
        this.s1 = true
      }
      if (this.vehicle.babyseat === 'y') {
        this.s2 = true
      } if (this.vehicle.fridge === 'y') {
        this.s3 = true
      } if (this.vehicle.food === 'y') {
        this.s4 = true
      } if (this.vehicle.music === 'y') {
        this.s5 = true
      }

    }, err => {
      console.log(err)
    })
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

  validatednum(ev: any) {
    var regx = /^(\+\d{1,3}[- ]?)?\d{10}$/
    if (regx.test(ev.target.value)) {
      var res = document.getElementById("dnums")

      if (res) {
        res.innerHTML = "Valid Phone Number"
        res.classList.add("validc")
        var dnum = document.getElementById("dnum")
        if (dnum) {
          dnum.classList.remove("invalid")
          dnum.classList.add("valid")
        }
      }
    }
    else {
      var res = document.getElementById("dnums")

      if (res) {
        res.innerHTML = "Invalid Phone Number"
        res.classList.remove("validc")

        var dnum = document.getElementById("dnum")
        if (dnum) {
          dnum.classList.remove("valid")
          dnum.classList.add("invalid")
        }
        // dnum.classList.remove("valid")
        // dnum.classList.add("invalid")
      }
    }
  }

  sendData() {



    this.setcheckboxs()

    let brand = document.getElementById("caps")
    let inp = document.getElementById("cap")
    if (!this.vehicle.capacity) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Vehicle Capacity"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    brand = document.getElementById("locas")
    inp = document.getElementById("loca")
    if (!this.vehicle.location) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Vehicle Location"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }


    brand = document.getElementById("prices")
    inp = document.getElementById("price")
    if (!this.vehicle.price) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Vehicle Price"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }


    brand = document.getElementById("dnames")
    inp = document.getElementById("dname")
    if (!this.vehicle.driver_name) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Driver Name"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    var regx = /^[0]{1}[7]{1}[0-8]{1}[0-9]{7}$/
    brand = document.getElementById("dnums")
    inp = document.getElementById("dnum")
    if (!this.vehicle.driver_number) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Driver Number"
        inp.classList.add("invalid")
      }
      return
    } else if (!regx.test(this.vehicle.driver_number)) {
      if (brand) {
        brand.innerHTML = "Invalid Driver Number"
        return
      }
    }
    else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    this.vehicleService.updateVehicle(this.id, this.vehicle).subscribe(data => {
      let v: Vehicle = <Vehicle>data
      console.log(v)
      this.router.navigate(["vehicletable"])
    }, err => {
      console.log(err)
    })

  }

}
