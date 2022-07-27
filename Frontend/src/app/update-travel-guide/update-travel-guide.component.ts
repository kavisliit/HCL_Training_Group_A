import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-travel-guide',
  templateUrl: './update-travel-guide.component.html',
  styleUrls: ['./update-travel-guide.component.css']
})
export class UpdateTravelGuideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public travel_pro_image = "../../assets/images/default-profile-pic.jpg";

  getProImage(event:any){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (eventPara:any) => {
        this.travel_pro_image = eventPara.target.result;
      }
    }
  }
}