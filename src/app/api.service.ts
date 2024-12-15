import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    headers: HttpHeaders;

    constructor(public http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers.append("Accept", 'aplication/json');
        this.headers.append("Content-Type", 'aplication/json');
        this.headers.append("Access-Control-Allow-Origin", '*');
    }
    getDatas() {
        return this.http.get('http://localhost/apiJly/getNoticia.php');
    }
}