import { Component, OnInit } from '@angular/core';
import { TravelGuideService } from 'src/app/travel-guide.service';

@Component({
  selector: 'app-booked-travel-guides',
  templateUrl: './booked-travel-guides.component.html',
  styleUrls: ['./booked-travel-guides.component.css']
})
export class BookedTravelGuidesComponent implements OnInit {
  public bookedGuidesList:any;

  constructor(private service: TravelGuideService) { }

  ngOnInit(): void {
    this.service.getAllBookedTravelGuides().subscribe(data => this.bookedGuidesList = data);
  }

  public deleteBookedGuide(bookedGuideId: number){
    this.service.deleteBookedGuide(bookedGuideId).subscribe();
    this.service.getAllBookedTravelGuides().subscribe(data => this.bookedGuidesList = data);
  }

}
