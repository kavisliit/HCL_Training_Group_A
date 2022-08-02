import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';

@Component({
  selector: 'app-place-user',
  templateUrl: './place-user.component.html',
  styleUrls: ['./place-user.component.css']
})
export class PlaceUserComponent implements OnInit {
  id!: number
  isadded: boolean = false
  mimage!: string
  fimage!: string
  bimage!: string
  iimage!: string
  place!: Place
  constructor(private placeservive: PlaceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!localStorage.getItem("uid")) {
      location.href = "login"
    }
    this.id = this.route.snapshot.params['id']
    this.getData()
    this.checkadded()
  }
  removeplace() {
    if (localStorage.getItem("cart")) {
      let data: any = localStorage.getItem("cart")
      let places = JSON.parse(data)

      for (var i = 0; i < places.length; i++) {
        if (places[i].id == this.id) {
          places.splice(i, 1)
          localStorage.setItem("cart", JSON.stringify(places))
          this.isadded = false;
          return
        }
      }



    }
  }

  checkadded() {
    if (localStorage.getItem("cart")) {
      let data: any = localStorage.getItem("cart")
      let places = JSON.parse(data)
      console.log(places)
      for (var i = 0; i < places.length; i++) {
        if (places[i].id == this.id) {
          console.log("s")
          this.isadded = true;
          return
        }
      }
      this.isadded = false
    }
    else {
      this.isadded = false
    }
  }

  addplace() {
    if (localStorage.getItem("cart")) {
      let data: any = localStorage.getItem("cart")
      let f = JSON.parse(data)
      f.push(this.place)
      localStorage.setItem("cart", JSON.stringify(f))
      this.checkadded()
    }
    else {
      let places: Place[] = []
      places.push(this.place)
      localStorage.setItem("cart", JSON.stringify(places))
      this.checkadded()
    }
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
    this.placeservive.getOnePlace(this.id).subscribe(data => {
      let v: Place = <Place>data
      this.place = v
      this.mimage = this.place.mimage
      this.fimage = this.place.image1
      this.bimage = this.place.image2
      this.iimage = this.place.image3
    }, err => {
      console.log(err)
    })
  }
}
