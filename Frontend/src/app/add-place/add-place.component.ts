import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  place: Place = new Place()
  constructor(private placeservice: PlaceService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {

    let brand = document.getElementById("types")
    let inp = document.getElementById("type")
    if (!this.place.type) {


      if (brand && inp) {
        brand.innerHTML = "Please select the type"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    brand = document.getElementById("names")
    inp = document.getElementById("name")
    if (!this.place.name) {


      if (brand && inp) {
        brand.innerHTML = "Please enter the Name"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    brand = document.getElementById("pros")
    inp = document.getElementById("pro")
    if (!this.place.province) {


      if (brand && inp) {
        brand.innerHTML = "Please enter the Province"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    brand = document.getElementById("citys")
    inp = document.getElementById("city")
    if (!this.place.city) {


      if (brand && inp) {
        brand.innerHTML = "Please enter the City"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }



    brand = document.getElementById("dess")
    inp = document.getElementById("des")
    if (!this.place.description) {


      if (brand && inp) {
        brand.innerHTML = "Please enter the description"
        inp.classList.add("invalid")
      }
      return
    } else {
      if (brand && inp) {
        brand.innerHTML = ""
        inp.classList.remove("invalid")
      }

    }

    this.placeservice.createplace(this.place).subscribe(data => {
      let v: Place = JSON.parse(JSON.stringify(data))
      this.router.navigate(["addplacepic", v.id])
      console.log(v)
    }, err => {
      console.log(err)
    })
  }


}
