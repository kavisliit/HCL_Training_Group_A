import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guide } from './guide';
import { Observable } from 'rxjs';
import { BookedGuide } from './bookGuide';

@Injectable({
  providedIn: 'root'
})
export class TravelGuideService {

  private baseUrl = "http://localhost:8070/guide";
  constructor(private http: HttpClient) { }

  // public addTravelGuide(guide: Guide){
  //   return this.http.post("http://localhost:8070/guide/save", guide, {responseType: 'json'});
  // }

  public addTravelGuide(guide: Guide, image: any){
    let langString = "[" + guide.languages.join() + "]";
    const fd = new FormData();
    fd.append('guideName', guide.guideName);
    fd.append('guideLevel', guide.guideLevel.toString());
    fd.append('age', guide.age.toString());
    fd.append('languages', langString);
    fd.append('guideImage', guide.guideImage);
    fd.append('guideImageMult', image);

    return this.http.post("http://localhost:8070/guide/save", fd);
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

  // public updateGuide(guideId:number,guide:Guide){
  //   return this.http.put("http://localhost:8070/guide/updateGuide/"+guideId, guide);
  // }

  public updateGuide(guideId:number,guide:Guide,image:any){
    let langString = "[" + guide.languages.join() + "]";
    const fd = new FormData();
    fd.append('guideName', guide.guideName);
    fd.append('guideLevel', guide.guideLevel.toString());
    fd.append('age', guide.age.toString());
    fd.append('languages', langString);
    fd.append('guideImage', guide.guideImage);
    fd.append('guideImageMult', image);

    console.log(fd);
    return this.http.put("http://localhost:8070/guide/updateGuide/"+guideId, fd);
  }

  //===== CLIENT SIDE API CALL ==========================================
  public bookTravelGuide(g: BookedGuide){
    return this.http.post("http://localhost:8070/guide/book/save", g);
  }

  public getAllBookedTravelGuides(): Observable<BookedGuide[]>{
    return this.http.get<BookedGuide[]>("http://localhost:8070/guide/book/getAll");
  }

  public deleteBookedGuide(id:number){
    return this.http.delete("http://localhost:8070/guide/book/delete/"+id);
  }
}
