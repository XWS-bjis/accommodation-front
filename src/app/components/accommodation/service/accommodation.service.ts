import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Accommodation, AccommodationFilter, AccommodationSearch } from '../model/accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private baseUrl: string = "http://localhost:8080/accommodation/";
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private router : Router,
    private http : HttpClient) {}

  getAll(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(`${this.baseUrl}all`, { headers: this.headers });
  }

  filter(filter: AccommodationSearch): Observable<Accommodation[]> {
    return this.http.post<Accommodation[]>(`${this.baseUrl}filter`, JSON.stringify(filter), { headers: this.headers })
  } 
}
