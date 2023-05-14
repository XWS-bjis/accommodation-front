import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accommodation } from '../model/accommodation';

const headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

@Injectable({
  providedIn: 'root'
})

export class AvailablePeriodService {

  private baseUrl: string = environment.baseReservationApiUrl + '/api/available-period';

  constructor(private http : HttpClient) { }

  getAllByAccommodation(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + "/accommodation/" + id);
  }

  updateAccommodation(availablePeriod : any):Observable<Accommodation> {
    return this.http.put<Accommodation>(`${this.baseUrl}`, JSON.stringify(availablePeriod), {headers:headers});
  }

  addAvailablePeriod(availablePeriod : any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,JSON.stringify(availablePeriod), { headers: headers });
  }
}
