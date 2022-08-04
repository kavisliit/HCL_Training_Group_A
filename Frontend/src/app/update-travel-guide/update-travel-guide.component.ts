import { Component, OnInit } from '@angular/core';
import { Guide } from '../guide';
import { TravelGuideService } from '../travel-guide.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-travel-guide',
  templateUrl: './update-travel-guide.component.html',
  styleUrls: ['./update-travel-guide.component.css']
})
export class UpdateTravelGuideComponent implements OnInit {

  public guide:Guide = new Guide();
  public updateMsg:any;

  constructor(
    private service:TravelGuideService, 
    private router: ActivatedRoute,
    private redirectRouter:Router
  ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['routerGuideId']);
    this.service.getGuideById(this.router.snapshot.params['routerGuideId']).subscribe((data:any) => {
      console.log(data);
      this.guide.guideId = this.router.snapshot.params['routerGuideId'];
      this.guide.age = data['age'];
      this.guide.guideImage = data['guideImage'];
      this.guide.guideLevel = data['guideLevel'];
      this.guide.guideName = data['guideName'];
      this.guide.languages = data['languages'];

      this.travel_pro_image = data['guideImage'];
    });
  }

  public travel_pro_image = "../../assets/images/default-profile-pic.jpg";

  getProImage(event:any){
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (eventPara:any) => {
        this.travel_pro_image = eventPara.target.result;
        // this.guide.guideImage = eventPara.target.result;
      }
    }
  }

  public updateGuide(){
    this.service.updateGuide(this.guide.guideId, this.guide).subscribe(data => this.updateMsg = data);
    this.redirectRouter.navigate(['travelGuide']);
  }
}
