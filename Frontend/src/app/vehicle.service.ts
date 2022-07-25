import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class VehicleService {
    private baseUrl = "http://localhost:8070/vehicles";

    constructor(private http: HttpClient) { }

    createVehicle(vehicle: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/add`, vehicle);
    }


    addPic(fdata: FormData, id: number): Observable<Object> {
        return this.http.post(`${this.baseUrl}/upload/${id}`, fdata);
    }

    getOneVehicle(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/get/${id}`)
    }

    getImage(name: string): Observable<Object> {
        return this.http.get(`${this.baseUrl}/image/${name}`)
    }
}