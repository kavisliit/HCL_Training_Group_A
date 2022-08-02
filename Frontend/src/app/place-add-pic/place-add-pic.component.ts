import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../Place';
import { PlaceService } from '../Place.Service';

@Component({
  selector: 'app-place-add-pic',
  templateUrl: './place-add-pic.component.html',
  styleUrls: ['./place-add-pic.component.css']
})
export class PlaceAddPicComponent implements OnInit {

  id: number = 0
  Mimage!: File;
  Fimage!: File;
  Bimage!: File;
  Iimage!: File;
  img1!: string
  place!: Place
  constructor(private placeservice: PlaceService, private router: Router, private route: ActivatedRoute) {

  }

  initialData() {
    this.placeservice.getOnePlace(this.id).subscribe(data => {
      let v: Place = <Place>data
      this.place = v;

    }, err => {
      console.log(err)
    });


  }


  ngOnInit(): void {
    if (!localStorage.getItem("aid")) {
      location.href = "adminlogin"
    }
    this.id = this.route.snapshot.params['id']
    this.initialData()
  }

  // getImage() {
  //   this.vehicleService.getImage(this.vehicle.mimage).subscribe(data => {
  //     return data
  //   }, err => {
  //     console.log(err)
  //   })

  // }

  getMImage(event: any) {
    this.Mimage = event.target.files[0];
  }

  getFImage(event: any) {
    this.Fimage = event.target.files[0];
  }

  getBImage(event: any) {
    this.Bimage = event.target.files[0];
  }

  getIImage(event: any) {
    this.Iimage = event.target.files[0];
  }

  mainimage(type: string) {
    let filetype: File
    if (type === "m") {
      filetype = this.Mimage
    } else if (type === "f") {
      filetype = this.Fimage
    } else if (type === "b") {
      filetype = this.Bimage
    } else {
      filetype = this.Iimage
    }
    if (!filetype) {
      alert("Please select an Image")
      return
    }
    const formData: FormData = new FormData();
    formData.append('file', filetype);
    formData.append('name', type);
    this.placeservice.addPic(formData, this.id).subscribe(data => {
      this.initialData()
    }, err => {
      console.log(err)
    })
  }

  proceed() {
    this.router.navigate(["placetable"])
  }


}
