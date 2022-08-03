import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddVehiclePicComponent } from './add-vehicle-pic/add-vehicle-pic.component';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { ViewOneVehicleComponent } from './view-one-vehicle/view-one-vehicle.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery/gallery.component';
import { TripPlanComponent } from './trip-plan/trip-plan.component';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TravelGuideService } from './travel-guide.service';
import { PlacesComponent } from './places/places.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceAddPicComponent } from './place-add-pic/place-add-pic.component';
import { OnePlaceComponent } from './one-place/one-place.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';
import { PlaceUserComponent } from './place-user/place-user.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddVehicleComponent,
    UpdateVehicleComponent,
    VehicleListComponent,
    OneVehicleComponent,
    VehicleCardComponent,
    AddVehiclePicComponent,
    VehicleTableComponent,
    ViewOneVehicleComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    GalleryComponent,
    TripPlanComponent,
    BookVehicleComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    PlacesComponent,
    PlaceCardComponent,
    AddPlaceComponent,
    PlaceTableComponent,
    PlaceAddPicComponent,
    OnePlaceComponent,
    UpdatePlaceComponent,
    PlaceUserComponent,
    SummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [TravelGuideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
