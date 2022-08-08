import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';

@Component({
  selector: 'app-one-place',
  templateUrl: './one-place.component.html',
  styleUrls: ['./one-place.component.css']
})
export class OnePlaceComponent implements OnInit {

  id!: number
  mimage!: string
  fimage!: string
  bimage!: string
  iimage!: string
  place!: Place
  constructor(private placeservive: PlaceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!localStorage.getItem("aid")) {
      location.href = "adminlogin"
    }
    this.id = this.route.snapshot.params['id']
    this.getData()
  }

  goback() {
    this.router.navigate(["placetable"])
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
