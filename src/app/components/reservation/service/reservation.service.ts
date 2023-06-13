import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReservationDTO } from '../model/reservation.model';

const headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { }

  private baseUrl: string = environment.baseReservationApiUrl + '/api/reservation';

  getAllByUser(id: string): Observable<ReservationDTO[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user/${id}`, {headers:headers});
  }

  public deleteById(id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers:headers});
  }
}
