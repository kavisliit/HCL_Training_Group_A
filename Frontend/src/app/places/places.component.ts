import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  ch: boolean = false
  price!: number
  places: Place[] = [];
  type: string = ''


  ngOnInit(): void {
    if (!localStorage.getItem("uid")) {
      location.href = "login"
    }
    this.getData()
  }
  constructor(private placeservice: PlaceService, private router: Router) {
    this.type = "no"

  }

  getData() {
    this.placeservice.getAllplaces().subscribe(data => {
      var list: Place[] = <Place[]>data
      this.places = list

    }, err => {
      console.log(err)
    })
  }

  filterType(ev: any) {
    var fdata = new FormData()
    this.type = ev.target.value
    fdata.append("type", this.type)


    this.placeservice.filterPlace(fdata).subscribe(data => {
      var v: Place[] = <Place[]>data
      this.places = v
    }, err => {
      console.log(err)
    });

  }




  reset() {
    this.ch = false
  }


}
