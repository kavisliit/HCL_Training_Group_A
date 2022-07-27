import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class UserService {
    private baseUrl = "http://localhost:8070/users";

    constructor(private http: HttpClient) { }

    createUser(user: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}/add`, user);
    }

    loginuser(ob: FormData): Observable<Object> {
        return this.http.post(`${this.baseUrl}/login`, ob);
    }

}
