import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Accommodation, Grade } from '../model/accommodation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private baseUrl: string = environment.baseApiUrl + '/accommodation';
  private baseUrlGrade: string = environment.baseApiUrl + '/grade';
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

    public getVisitedAccommodationsByUser(userId: string): Observable<Accommodation[]> {
      return this.http.get<Accommodation[]>(`${this.baseUrl}/user/${userId}/visited`);
    }

    createGrade(grade : any, accommodationId: string): Observable<void>{
      return this.http.post<void>(`${this.baseUrlGrade}/accommodation/${accommodationId}`,JSON.stringify(grade), { headers: this.headers });
    }

    editGrade(grade : any, accommodationId: string): Observable<void>{
      return this.http.put<void>(`${this.baseUrlGrade}/accommodation/${accommodationId}`,JSON.stringify(grade), { headers: this.headers });
    }

    deleteGrade(userId : string, accommodationId: string): Observable<void>{
      return this.http.delete<void>(`${this.baseUrlGrade}/accommodation/${accommodationId}/${userId}`, { headers: this.headers });
    }

}

