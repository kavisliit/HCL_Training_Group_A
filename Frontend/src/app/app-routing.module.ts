import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlaceComponent } from './add-place/add-place.component';
import { AddVehiclePicComponent } from './add-vehicle-pic/add-vehicle-pic.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OnePlaceComponent } from './one-place/one-place.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';
import { PlaceAddPicComponent } from './place-add-pic/place-add-pic.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceUserComponent } from './place-user/place-user.component';
import { PlacesComponent } from './places/places.component';
import { RegisterComponent } from './register/register.component';
import { SummaryComponent } from './summary/summary.component';
import { TravelGuideAddComponent } from './travel-guide-add/travel-guide-add.component';
import { TravelGuideRUDComponent } from './travel-guide-rud/travel-guide-rud.component';
import { TripPlanComponent } from './trip-plan/trip-plan.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';
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
  { path: "oneplace/:id", component: OnePlaceComponent },
  { path: "addvehicle", component: AddVehicleComponent },
  { path: "updatevehicle/:id", component: UpdateVehicleComponent },
  { path: "updateplace/:id", component: UpdatePlaceComponent },
  { path: "addvehiclepic/:id", component: AddVehiclePicComponent },
  { path: "vehicletable", component: VehicleTableComponent },
  { path: "veiwone/:id", component: ViewOneVehicleComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "plantrip", component: TripPlanComponent },
  { path: "bookvehicle/:id", component: BookVehicleComponent },
  { path: "adminlogin", component: AdminLoginComponent },
  { path: "adminhome", component: AdminHomeComponent },
  { path: "addplace", component: AddPlaceComponent },
  { path: "", component: LoginComponent },
  { path: "addplacepic/:id", component: PlaceAddPicComponent },
  { path: "placetable", component: PlaceTableComponent },
  { path: "placelist", component: PlacesComponent },
  { path: "useroneplace/:id", component: PlaceUserComponent },
  { path: "summary/:id", component: SummaryComponent },
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
  AdminLoginComponent,
  TripPlanComponent,
  AdminHomeComponent,
  AddPlaceComponent,
  PlacesComponent,
  SummaryComponent
];
