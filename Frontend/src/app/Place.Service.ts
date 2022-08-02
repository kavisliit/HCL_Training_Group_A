import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class PlaceService {
    private baseUrl = "http://localhost:8070/places";

    constructor(private http: HttpClient) { }

    createplace(des: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/add`, des);
    }

    loginuser(ob: FormData): Observable<Object> {
        return this.http.post(`${this.baseUrl}/login`, ob);
    }
    getAllplaces(): Observable<Object> {
        return this.http.get(`${this.baseUrl}/all`);
    }
    filterPlace(ob: FormData): Observable<Object> {
        return this.http.post(`${this.baseUrl}/filter`, ob)
    }
    getOnePlace(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/get/${id}`)
    }

    addPic(fdata: FormData, id: number): Observable<Object> {
        return this.http.post(`${this.baseUrl}/upload/${id}`, fdata);
    }


    updatePlace(id: number, vehicle: object): Observable<Object> {
        return this.http.put(`${this.baseUrl}/update/${id}`, vehicle)
    }

    deletePlace(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/${id}`)
    }
}
