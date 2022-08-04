import { Component, OnInit } from '@angular/core';
import { BookedGuide } from 'src/app/bookGuide';
import { TravelGuideService } from 'src/app/travel-guide.service';

@Component({
  selector: 'app-travel-guide-book',
  templateUrl: './travel-guide-book.component.html',
  styleUrls: ['./travel-guide-book.component.css']
})
export class TravelGuideBookComponent implements OnInit {
  public travelGuides:any;
  guide: BookedGuide = new BookedGuide();
  days:any;
  name:any;
  bookButton:any;
  dayError:any;
  nameError:any;

  constructor(private service:TravelGuideService) { }

  ngOnInit(): void {
    this.service.getAllTravelGuides().subscribe(data => this.travelGuides = data);
    this.guide.price = 0;
  }

  public selectGuide(guideId: number){
    this.service.getGuideById(guideId).subscribe((data:any) => {
      this.guide.bookedGuideId = guideId;
      this.guide.guideName = data['guideName'];
    });
  }

  public calPrice(event: any){
    this.guide.noOfDays = event.target.value;
    let noOfDays = event.target.value;
    if(noOfDays <= 0){
      this.guide.price = 0;
    }else if(noOfDays <=5){
      this.guide.price = 1000;
    }else if(noOfDays <=10){
      this.guide.price = 4000;
    }else if(noOfDays <= 20){
      this.guide.price = 8000;
    }else{
      this.guide.price = 10000;
    }
  }

  bookGuide(){
    this.days = document.getElementById("noOfDays");
    this.name = document.getElementById("guideName");
    this.bookButton = document.getElementById("bookGuideBtn");
    this.dayError = document.getElementById("dayError");
    this.nameError = document.getElementById("nameError");

    if(this.days.value == null || this.days.value<=0){
      this.dayError.innerHTML = "Please enter no of days before booking";
      this.dayError.style.color = "red";
    }else{
      this.dayError.style.visibility = "hidden";
    }

    if(this.name.value.length == 0 || this.name.value.length < 0){
      this.nameError.innerHTML = "Please select guide";
      this.nameError.style.color = "red";
    }else{
      this.nameError.style.visibility = "hidden";
    }

    if(this.name.value.length > 0 && this.days.value > 0){
      this.service.bookTravelGuide(this.guide).subscribe();
      alert("Travel Guide Booked Successfully");
    }
  }
}
