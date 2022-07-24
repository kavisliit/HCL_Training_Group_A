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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
