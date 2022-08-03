import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class BookingService {
    private baseUrl = "http://localhost:8070/booking";

    constructor(private http: HttpClient) { }

    createbooking(des: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/add`, des);
    }


    getOneBooking(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/get/${id}`)
    }


}
