import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddVehicleComponent,
    UpdateVehicleComponent,
    VehicleListComponent,
    OneVehicleComponent,
    VehicleCardComponent,
    HotelListComponent,
    CreateHotelComponent,
    UpdateHotelComponent,
    HotelDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
