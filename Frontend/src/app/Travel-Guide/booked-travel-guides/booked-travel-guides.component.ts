import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelGuideService } from 'src/app/travel-guide.service';

@Component({
  selector: 'app-booked-travel-guides',
  templateUrl: './booked-travel-guides.component.html',
  styleUrls: ['./booked-travel-guides.component.css']
})
export class BookedTravelGuidesComponent implements OnInit {
  public bookedGuidesList:any;

  constructor(private service: TravelGuideService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAllBookedTravelGuides().subscribe(data => this.bookedGuidesList = data);
  }

  back(){
    this.router.navigate(["bookGuideMain"]);
  }

  public deleteBookedGuide(id: number){
    this.service.deleteBookedGuide(id).subscribe();
    this.service.getAllBookedTravelGuides().subscribe(data => this.bookedGuidesList = data);
  }

}
