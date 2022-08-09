import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guide } from '../guide';
import { TravelGuideService } from '../travel-guide.service';
@Component({
  selector: 'app-travel-guide-add',
  templateUrl: './travel-guide-add.component.html',
  styleUrls: ['./travel-guide-add.component.css']
})
export class TravelGuideAddComponent implements OnInit {
  constructor(
    private router: Router,
    private service: TravelGuideService
  ) { }

  ngOnInit(): void {}

  guide: Guide = new Guide();
  public message:any;
  public selectedItemsList:any = [];
  public selectedLanguages:any = [];
  public selectedGuideImage:any;

  public travel_pro_image = "../../assets/images/default-profile-pic.jpg";

  back(){
    this.router.navigate(['adminhome'])
  }
  
  redirectSeeAllGuides(){
    this.router.navigate(['travelGuide'])
  }

  getProImage(event:any){
    if(event.target.files){
      this.selectedGuideImage = <File>event.target.files[0];
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

  langList = [
    {langId: 1, label: "English", isChecked: false},
    {langId: 2, label: "Sinhala", isChecked: false},
    {langId: 3, label: "Tamil", isChecked: false},
    {langId: 4, label: "French", isChecked: false}
  ];

  public changeSelection(id:number){
    for(let i=0; i<this.langList.length; i++){
      if(this.langList[i].langId == id){
        this.langList[i].isChecked = !this.langList[i].isChecked;
      }
    }
    this.selectedItemsList = this.langList.filter((value, index) => {
      return value.isChecked;
    });
    this.selectedLanguages = this.selectedItemsList.map((item: { label: any; }) => {
      return item.label;
    });
    this.guide.languages = this.selectedLanguages;
    console.log(this.selectedItemsList);
  }

  //========== Calling Backend Api ===================================================================
  //add travel Guide
  public addTravelGuide(){
    try{
      let response = this.service.addTravelGuide(this.guide, this.selectedGuideImage);
      response.subscribe(data => this.message = data);
      alert("Travel Guide Added");
    }catch(error){
      console.error(error);
    }
    
  }

}
