import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';

@Component({
  selector: 'app-place-table',
  templateUrl: './place-table.component.html',
  styleUrls: ['./place-table.component.css']
})
export class PlaceTableComponent implements OnInit {

  places!: Place[];
  constructor(private placeservice: PlaceService, private router: Router) { }
  place: Place = new Place()
  ngOnInit(): void {
    if (!localStorage.getItem("aid")) {
      location.href = "adminlogin"
    }
    this.loadData()
  }
  goback() {
    this.router.navigate(["adminhome"])
  }

  loadData() {
    this.placeservice.getAllplaces().subscribe(data => {
      let v: Place[] = <Place[]>data
      this.places = v
      console.log(this.places)
    }, err => {
      console.log(err)
    });

  }


  deleteVehicle(id: number) {
    this.placeservice.deletePlace(id).subscribe(data => {
      alert("Deleted successfully")
      this.loadData()
    }, err => {
      console.log(err)
    })
  }
  oneView(id: number) {

    this.router.navigate(["oneplace", id])


  }
  addvehicle() {
    this.router.navigate(["addplace"])
  }

  updateView(id: number) {
    this.router.navigate(["updateplace", id])
  }

}
