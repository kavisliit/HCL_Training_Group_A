import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';
import { TravelGuideAddComponent } from './travel-guide-add/travel-guide-add.component';
import { TravelGuideRUDComponent } from './travel-guide-rud/travel-guide-rud.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { HotelDetailsComponent } from './hotel_management/hotel-details/hotel-details.component';
import { HotelListComponent } from './hotel_management/hotel-list/hotel-list.component';
import { CreateHotelComponent } from './hotel_management/create-hotel/create-hotel.component';
import { UpdateHotelComponent } from './hotel_management/update-hotel/update-hotel.component';

const routes: Routes = [
  { path: "addTravelGuide", component: TravelGuideAddComponent },
  { path: "travelGuide", component: TravelGuideRUDComponent },
  { path: "allvehicle", component: VehicleListComponent },
  { path: "onevehicle", component: OneVehicleComponent },
  { path: "addvehicle", component: AddVehicleComponent },
  { path: "updatevehicle", component: UpdateVehicleComponent },

  {path: 'hotels', component: HotelListComponent},
  {path: 'create-hotel', component: CreateHotelComponent},
  {path: '', redirectTo: 'hotels', pathMatch: 'full'},
  {path: 'update-hotel/:id', component: UpdateHotelComponent},
  {path: 'hotel-details/:id', component: HotelDetailsComponent}
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
