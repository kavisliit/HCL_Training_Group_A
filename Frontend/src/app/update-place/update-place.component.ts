import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';

@Component({
  selector: 'app-update-place',
  templateUrl: './update-place.component.html',
  styleUrls: ['./update-place.component.css']
})
export class UpdatePlaceComponent implements OnInit {
  id!: number
  place: Place = new Place()
  constructor(private placeservice: PlaceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.getdata()
  }

  getdata() {
    this.placeservice.getOnePlace(this.id).subscribe(data => {
      let d: Place = <Place>data
      this.place = d;
    }, er => {
      console.log(er)
    })
  }
  goback() {
    this.router.navigate(["placetable"])
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

    this.placeservice.updatePlace(this.id, this.place).subscribe(data => {
      this.router.navigate(["placetable"])

    }, err => {
      console.log(err)
    })
  }


}
