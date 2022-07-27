import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
