import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Accommodation } from '../model/accommodation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private baseUrl: string = environment.baseApiUrl + '/accommodation';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private router : Router,
    private http : HttpClient) { }

    createAccommodation(accommodation : Accommodation): Observable<Accommodation>{
      return this.http.post<Accommodation>(`${this.baseUrl}`,JSON.stringify(accommodation), { headers: this.headers });
    }

    getAllAccommodations(): Observable<Accommodation[]> {
      return this.http.get<Accommodation[]>(this.baseUrl);
    }

}

