import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  hotel: Hotel = new Hotel();
  constructor(private hotelService: HotelService,
    private router: Router) { }


  ngOnInit(): void {
  }

  saveHotel(){
    this.hotelService.createHotel(this.hotel).subscribe(data =>{
      console.log(data);
      this.goToHotelList();
    },
    error => console.log(error));
  }

  goToHotelList(){
    this.router.navigate(['/hotels']);
  }
  onSubmit(){
    console.log(this.hotel);
    this.saveHotel();
  }

}
