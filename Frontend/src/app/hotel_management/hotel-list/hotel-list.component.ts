import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel} from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
    // this.hotels = [{
    //   id: 1,
    //   firstName: 'Tharuka',
    //   lastName : 'Madhushanka',
    //   emailId : 'tharuka@gmail.com'
    // }];
    this.getHotels();
  }

  private getHotels(){
    this.hotelService.getHotelsList().subscribe(data => {
      this.hotels = data;
    });
  }

  hotelDetails(id: number){
    this.router.navigate(['hotel-details', id]);
  }
  updateHotel(id: number){
    this.router.navigate(['update-hotel', id]);
  }

  deleteHotel(id: number){
    this.hotelService.deleteHotel(id).subscribe(data => {
      console.log(data);
      this.getHotels();
    });
  }

}
