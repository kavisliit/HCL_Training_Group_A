import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guide } from './guide';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelGuideService {

  private baseUrl = "http://localhost:8070/guide";
  constructor(private http: HttpClient) { }

  public addTravelGuide(guide: Guide){
    return this.http.post("http://localhost:8070/guide/save", guide, {responseType: 'json'});
  }

  public getAllTravelGuides(): Observable<Guide[]>{
    return this.http.get<Guide[]>("http://localhost:8070/guide/getAll");
  }

  public deleteGuide(guideId: number){
    return this.http.delete("http://localhost:8070/guide/deleteGuide/"+guideId);
  }

  public getGuideById(guideId:number){
    return this.http.get("http://localhost:8070/guide/getGuide/"+guideId);
  }

  public updateGuide(guideId:number,guide:Guide){
    return this.http.put("http://localhost:8070/guide/updateGuide/"+guideId, guide);
  }
}
