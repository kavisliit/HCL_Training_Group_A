import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-guide-add',
  templateUrl: './travel-guide-add.component.html',
  styleUrls: ['./travel-guide-add.component.css']
})
export class TravelGuideAddComponent implements OnInit {
  public travel_pro_image = "../../assets/images/default-profile-pic.jpg";

  getProImage(){
    console.log("image Clicked...");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
