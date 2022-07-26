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

  validatevehiclenum(ev: any) {
    var regex = /^([0-9]{1,3}|[A-Z]{2,3})-[0-9]{4}$/
    if (regex.test(ev.target.value)) {
      var res = document.getElementById("vnums")
      var vnum = document.getElementById("vnum")
      if (res && vnum) {
        res.innerHTML = "Valid Vehicle Number"
        res.classList.add("validc")
        vnum.classList.remove("invalid")
        vnum.classList.add("valid")
      }
    }
    else {
      var res = document.getElementById("vnums")
      var vnum = document.getElementById("vnum")
      if (res && vnum) {
        res.innerHTML = "Invalid Vehicle Number"
        res.classList.remove("validc")
        vnum.classList.remove("valid")
        vnum.classList.add("invalid")
      }
    }
  }

  checkdnum(ev: any) {

    var regx = /^[0]{1}[7]{1}[0-8]{1}[0-9]{7}$/
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



  save() {
    this.setcheckboxs()

  }



  submit() {
    this.save();

    let brand = document.getElementById("brands")
    let inp = document.getElementById("brand")
    if (!this.vehicle.type) {


      if (brand && inp) {
        brand.innerHTML = "Please Select the Vehicle Type"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }


    brand = document.getElementById("types")
    inp = document.getElementById("type")
    if (!this.vehicle.brand) {


      if (brand && inp) {
        brand.innerHTML = "Please Select the Vehicle Brand"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }



    brand = document.getElementById("mods")
    inp = document.getElementById("mod")
    if (!this.vehicle.model) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Vehicle Model"
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





    var reg = /^([0-9]{1,3}|[A-Z]{1,3})-[0-9]{4}$/
    brand = document.getElementById("vnums")
    inp = document.getElementById("vnum")
    if (!this.vehicle.vnumber) {


      if (brand && inp) {
        brand.innerHTML = "Please Enter the Vehicle Number"
        inp.classList.add("invalid")
      }
      return
    } else if (!reg.test(this.vehicle.vnumber)) {
      if (brand) {
        brand.innerHTML = "Invalid Vehicle Number"
        return
      }
    }
    else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }



    brand = document.getElementById("caps")
    inp = document.getElementById("cap")
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

    var regx = /^(\+\d{1,3}[- ]?)?\d{10}$/
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

    this.vehicleService.createVehicle(this.vehicle).subscribe((data) => {
      let v: Vehicle = JSON.parse(JSON.stringify(data))
      this.router.navigate(["addvehiclepic", v.id])
    }, error => {
      console.log(error)
    })

  }



}
