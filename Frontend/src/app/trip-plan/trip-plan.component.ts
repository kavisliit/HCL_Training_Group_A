import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrls: ['./trip-plan.component.css']
})
export class TripPlanComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  showvehicle() {
    this.router.navigate(["allvehicle"])
  }

  ngOnInit(): void {
  }

}
