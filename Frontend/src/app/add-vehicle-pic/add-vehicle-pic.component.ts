import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../Vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-add-vehicle-pic',
  templateUrl: './add-vehicle-pic.component.html',
  styleUrls: ['./add-vehicle-pic.component.css']
})
export class AddVehiclePicComponent implements OnInit {

  id: number = 0
  Mimage!: File;
  Fimage!: File;
  Bimage!: File;
  Iimage!: File;
  img1!: string
  vehicle!: Vehicle
  constructor(private vehicleService: VehicleService, private router: Router, private route: ActivatedRoute) {

  }

  initialData() {
    this.vehicleService.getOneVehicle(this.id).subscribe(data => {
      let v: Vehicle = <Vehicle>data
      this.vehicle = v;

    }, err => {
      console.log(err)
    });


  }


  ngOnInit(): void {
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
    const formData: FormData = new FormData();
    formData.append('file', filetype);
    formData.append('name', type);
    this.vehicleService.addPic(formData, this.id).subscribe(data => {
      this.initialData()
    }, err => {
      console.log(err)
    })
  }


}
