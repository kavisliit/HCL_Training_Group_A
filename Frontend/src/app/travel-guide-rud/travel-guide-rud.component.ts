import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-guide-rud',
  templateUrl: './travel-guide-rud.component.html',
  styleUrls: ['./travel-guide-rud.component.css']
})
export class TravelGuideRUDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteGuide(){
    alert("Deleting");
  }

  updateGuide(){
    alert("Updating");
  }

  public travelGuidesList = [
    {name: "Jonny Jonny", age: 22, experienceLevel: 2, proPic: "../../assets/images/dummyImg.jpg", languages: ["Sinhala", "English", "Tamil", "French"]},
    {name: "Jonny Jonny", age: 22, experienceLevel: 2, proPic: "../../assets/images/dummyImg.jpg", languages: ["Sinhala", "English", "Tamil"]},
    {name: "Jonny Jonny", age: 22, experienceLevel: 2, proPic: "../../assets/images/dummyImg.jpg", languages: ["Tamil", "French"]},
    {name: "Jonny Jonny", age: 22, experienceLevel: 2, proPic: "../../assets/images/dummyImg.jpg", languages: ["Tamil"]},
    {name: "Jonny Jonny", age: 22, experienceLevel: 2, proPic: "../../assets/images/dummyImg.jpg", languages: ["French"]},
    {name: "Jonny Jonny", age: 22, experienceLevel: 2, proPic: "../../assets/images/dummyImg.jpg", languages: ["French"]},
    {name: "Jonny Jonny", age: 22, experienceLevel: 2, proPic: "../../assets/images/dummyImg.jpg", languages: ["Sinhala", "English", "Tamil"]},
  ];
}
