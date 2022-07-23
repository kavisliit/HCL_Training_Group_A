import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {

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
