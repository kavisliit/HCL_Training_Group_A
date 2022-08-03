import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelGuideService } from '../travel-guide.service';

@Component({
  selector: 'app-travel-guide-rud',
  templateUrl: './travel-guide-rud.component.html',
  styleUrls: ['./travel-guide-rud.component.css']
})
export class TravelGuideRUDComponent implements OnInit {

  public travelGuides: any = [];
  public deleteMessage:any = "";

  constructor(private router: Router, private service: TravelGuideService) { }

  ngOnInit(): void {
    this.service.getAllTravelGuides().subscribe(data => this.travelGuides = data);
  }

  redirectAddGuides(){
    this.router.navigate(['addTravelGuide'])
  }

  deleteGuide(id:number){
    this.service.deleteGuide(id).subscribe(data => this.deleteMessage = data);
    this.service.getAllTravelGuides().subscribe(data => this.travelGuides = data);
  }

  updateGuide(){
    alert("Updating");
  }
}
