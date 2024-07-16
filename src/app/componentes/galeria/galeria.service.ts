import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class GaleriaService {
    constructor(private http: HttpClient) {}

    getAllPhotos(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
}