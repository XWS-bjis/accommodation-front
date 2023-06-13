import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Accommodation, AccommodationFilter, AccommodationSearch } from '../model/accommodation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private baseUrl: string = environment.baseApiUrl + '/accommodation';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private router : Router,
    private http : HttpClient) {}

  filter(filter: AccommodationSearch): Observable<Accommodation[]> {
    return this.http.post<Accommodation[]>(`${this.baseUrl}filter`, JSON.stringify(filter), { headers: this.headers })
  } 

  createAccommodation(accommodation : Accommodation): Observable<Accommodation>{
    return this.http.post<Accommodation>(`${this.baseUrl}`,JSON.stringify(accommodation), { headers: this.headers });
  }

  getAllAccommodations(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.baseUrl);
  }

}

