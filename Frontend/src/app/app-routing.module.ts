import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelGuideAddComponent } from './travel-guide-add/travel-guide-add.component';
import { TravelGuideRUDComponent } from './travel-guide-rud/travel-guide-rud.component';

const routes: Routes = [
  {path: "addTravelGuide", component: TravelGuideAddComponent},
  {path: "travelGuide", component: TravelGuideRUDComponent},
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
