import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/register.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api/v1/user';
const headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public update(id: string,  user: User): Observable<User> {
    return this.http.put<User>(`${baseUrl}/${id}`, JSON.stringify(user), {headers:headers});
  }

  public getById(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/find/${id}`, {headers:headers});
  }

  public deleteById(id: string): Observable<any>{
    return this.http.delete<any>(`${baseUrl}/delete/${id}`, { headers:headers});
  }
}
