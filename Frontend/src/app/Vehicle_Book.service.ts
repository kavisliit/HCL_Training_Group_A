import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class Vehicle_Book {
    private baseUrl = "http://localhost:8070/vehiclebook";

    constructor(private http: HttpClient) { }

    addbooking(book: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/add`, book);
    }



}
