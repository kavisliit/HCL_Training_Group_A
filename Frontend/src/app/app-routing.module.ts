import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiclePicComponent } from './add-vehicle-pic/add-vehicle-pic.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';
import { RegisterComponent } from './register/register.component';
import { TravelGuideAddComponent } from './travel-guide-add/travel-guide-add.component';
import { TravelGuideRUDComponent } from './travel-guide-rud/travel-guide-rud.component';
import { TripPlanComponent } from './trip-plan/trip-plan.component';
import { UpdateTravelGuideComponent } from './update-travel-guide/update-travel-guide.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { ViewOneVehicleComponent } from './view-one-vehicle/view-one-vehicle.component';

const routes: Routes = [
  { path: "addTravelGuide", component: TravelGuideAddComponent },
  { path: "travelGuide", component: TravelGuideRUDComponent },
  { path: "updateTravelGuide", component: UpdateTravelGuideComponent },
  { path: "allvehicle", component: VehicleListComponent },
  { path: "onevehicle/:id", component: OneVehicleComponent },
  { path: "addvehicle", component: AddVehicleComponent },
  { path: "updatevehicle/:id", component: UpdateVehicleComponent },
  { path: "addvehiclepic/:id", component: AddVehiclePicComponent },
  { path: "vehicletable", component: VehicleTableComponent },
  { path: "veiwone/:id", component: ViewOneVehicleComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "plantrip", component: TripPlanComponent },
  { path: "bookvehicle/:id", component: BookVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  TravelGuideAddComponent,
  TravelGuideRUDComponent,
  UpdateTravelGuideComponent,
  RegisterComponent,
  LoginComponent,
  VehicleTableComponent,
  HomeComponent,
  TripPlanComponent
];
