import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-guide-add',
  templateUrl: './travel-guide-add.component.html',
  styleUrls: ['./travel-guide-add.component.css']
})
export class TravelGuideAddComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

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

  public profilePicture = {
    "pro-pic-error" : false,
    "pro-pic" : true,
    "button-shadow" : true,
  };

  addGuide(){
    console.log(this.addTravelGuideForm.value);
    console.log(this.addTravelGuideForm.get('proimage')?.value);
  }

  addTravelGuideForm = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(3)]),
    age : new FormControl('', [Validators.required, Validators.min(0)]),
    exLevel : new FormControl('', [Validators.required]),
    proimage : new FormControl('', [Validators.required])

  })

  get name(){
    return this.addTravelGuideForm.get('name');
  }

  get age(){
    return this.addTravelGuideForm.get('age');
  }

  get exLevel(){
    return this.addTravelGuideForm.get('exLevel');
  }

  get proimage(){
    return this.addTravelGuideForm.get('proimage')
  }
}
