import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookedGuide } from '../bookGuide';
import { Booking } from '../Booking';
import { BookingService } from '../Booking.service';
import { Guide } from '../guide';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';
import { TravelGuideService } from '../travel-guide.service';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  id!: number
  places!: Place[]
  vehicle!: Vehicle
  book!: Booking
  vid!: number
  bookedguide: BookedGuide = new BookedGuide();
  guide: Guide = new Guide();
  guideId: any;
  constructor(private placeservive: PlaceService, private router: Router, private route: ActivatedRoute, private bookservice: BookingService, private vehicleservice: VehicleService, private guideService:TravelGuideService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getlist()
    this.getdata()
    this.guide.guideImage = "data:image/jpeg;base64,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";
    this.guide.guideName = "No Guide Selected to show Name";
    this.guide.guideLevel = 0;
    this.guide.age = 0;
  }

  getdata() {
    this.bookservice.getOneBooking(this.id).subscribe(data => {
      let v: Booking = <Booking>data
      this.vid = v.vbookid
      this.book = v
      this.guideId = v.guideid;
      this.getvehicle()
      this.getGuideDetails()
    }, err => {
      console.log(err)
    })
  }

  // getGuideDetails(){
  //   console.log("INSIDE GET");
  //   this.guideService.getGuideById(this.guideId).subscribe((data:any) => {
  //     this.guideId.guideId = this.guideId;
  //     this.guide.age = data['age'];
  //     this.guide.guideImage = data['guideImage'];
  //     this.guide.guideLevel = data['guideLevel'];
  //     this.guide.guideName = data['guideName'];
  //     this.guide.languages = data['languages'];
  //   });
  //   console.log(this.guide.guideName);
  // }

  getGuideDetails(){
    this.guideService.getBookedGuide(this.guideId).subscribe((data:any) => {
      this.bookedguide.id = this.guideId;
      this.bookedguide.bookedGuideId = data['bookedGuideId'];
      this.bookedguide.price = data['price'];
      this.guideService.getGuideById(this.bookedguide.bookedGuideId).subscribe((data1:any) => {
        this.guide.guideId = this.bookedguide.bookedGuideId;
        this.guide.age = data1['age'];
        this.guide.guideImage = data1['guideImage'];
        this.guide.guideLevel = data1['guideLevel'];
        this.guide.guideName = data1['guideName'];
        this.guide.languages = data1['languages'];
      });
    });
  }

  getvehicle() {
    this.vehicleservice.getOneVehicle(this.vid).subscribe(data => {
      let s: Vehicle = <Vehicle>data
      this.vehicle = s
      console.log(this.vehicle)
    }, err => {
      console.log(err)
    })
  }
  getlist() {
    if (localStorage.getItem("cart")) {
      let data: any = localStorage.getItem("cart")
      let arr = JSON.parse(data)
      this.places = arr
    }
  }

  finish() {
    localStorage.removeItem("cart")
    localStorage.setItem("book", "false")
    this.router.navigate(["home"])
  }

}
