import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class AdminService {
    private baseUrl = "http://localhost:8070/admin";

    constructor(private http: HttpClient) { }


    loginAdmin(ob: FormData): Observable<Object> {
        return this.http.post(`${this.baseUrl}/login`, ob);
    }

}
