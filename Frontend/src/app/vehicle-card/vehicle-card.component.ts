import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.css']
})
export class VehicleCardComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private router: Router) {
    this.data = new Vehicle()
  }
  @Input('data') data;
  ngOnInit(): void {
  }

  viewVehicle(id: number) {
    this.router.navigate(["onevehicle", id])
  }

}
