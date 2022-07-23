import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {

  constructor() {
    this.imgname = ''
  }
  @Input('imgName') imgname;
  ngOnInit(): void {
  }

}
