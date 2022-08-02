import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  constructor(private placeservice: PlaceService, private router: Router) {
    this.data = new Place()
  }
  @Input('data') data;
  ngOnInit(): void {
  }

  viewplace(id: number) {
    this.router.navigate(["useroneplace", id])
  }

}
