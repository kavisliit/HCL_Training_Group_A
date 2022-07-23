import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';
import { TravelGuideAddComponent } from './travel-guide-add/travel-guide-add.component';
import { TravelGuideRUDComponent } from './travel-guide-rud/travel-guide-rud.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  { path: "addTravelGuide", component: TravelGuideAddComponent },
  { path: "travelGuide", component: TravelGuideRUDComponent },
  { path: "allvehicle", component: VehicleListComponent },
  { path: "onevehicle", component: OneVehicleComponent },
  { path: "addvehicle", component: AddVehicleComponent },
  { path: "updatevehicle", component: UpdateVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  TravelGuideAddComponent,
  TravelGuideRUDComponent,
];
