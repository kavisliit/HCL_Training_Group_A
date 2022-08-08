import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  name:any;
  bookButton:any;
  dayError:any;
  nameError:any;
  startError:any;
  endError:any;
  start!: Date;
  startDateTime:any;
  end!:Date;
  endDateTime:any;
  difference:any = 0;

  constructor(
    private service:TravelGuideService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAllTravelGuides().subscribe(data => this.travelGuides = data);
    this.guide.price = 0;
    this.guide.noOfDays = 0;
  }

  back(){
    this.router.navigate(["bookGuideMain"]);
  }

  public selectGuide(guideId: number){
    this.service.getGuideById(guideId).subscribe((data:any) => {
      this.guide.bookedGuideId = guideId;
      this.guide.guideName = data['guideName'];
    });
  }

  startDate(event:any){
    this.start = new Date(event.target.value);
    if(this.startError != null){
      this.startError.innerHTML = null;
    }
    if(this.end != null){
      this.difference = this.end.getDate() - this.start.getDate();
      this.guide.noOfDays = this.difference;
      this.calPrice2(this.difference);
    }
  }

  endDate(event:any){
    this.end = new Date(event.target.value);
    if(this.start != null){
      this.difference = this.end.getDate() - this.start.getDate();
      this.guide.noOfDays = this.difference;
      this.calPrice2(this.difference);
    }
    if(this.endError != null){
      this.endError.innerHTML = null;
    }
  }

  public calPrice2(differ: any){
    let noOfDays = differ;
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
    this.name = document.getElementById("guideName");
    this.startDateTime = document.getElementById("startDate");
    this.endDateTime = document.getElementById("endDate");

    this.bookButton = document.getElementById("bookGuideBtn");
    this.nameError = document.getElementById("nameError");
    this.startError = document.getElementById("startError");
    this.endError = document.getElementById("endError");

    if(this.startDateTime.value.length <= 0){
      this.startError.innerHTML = "Please select booking start";
      this.startError.style.color = "red";
    }else{
      this.startError.visibility = "hidden";
      this.startError.innerHTML = null;
    }

    if(this.endDateTime.value.length <= 0){
      this.endError.innerHTML = "Please select booking end";
      this.endError.style.color = "red";
    }else{
      this.endError.visibility = "hidden";
      this.endError.innerHTML = null;
    }

    if(this.name.value.length == 0 || this.name.value.length < 0){
      this.nameError.innerHTML = "Please select guide";
      this.nameError.style.color = "red";
    }else{
      this.nameError.style.visibility = "hidden";
    }

    if(this.name.value.length > 0 && this.endDateTime.value.length > 0 && this.startDateTime.value.length > 0){
      this.service.bookTravelGuide(this.guide).subscribe();
      alert("Travel Guide Booked Successfully");
    }
  }
}
