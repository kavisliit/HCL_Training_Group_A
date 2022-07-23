import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent {

  public vehiclenumber = ""
  public color = ""
  public vnumeror = ""
  checkVehilceNumber() {
    let regx = "^([a-zA-Z]{1,3})-[0-9]{4}$"
    if (this.vehiclenumber.match(regx)) {
      this.vnumeror = "Good"
      this.color = "green";
    }
    else {
      this.vnumeror = "Bad"
      this.color = "red"
    }

  }

  sendData() {
    console.log("submit")
  }

}
