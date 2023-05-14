import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogedUser, User } from '../model/register.model';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { LoginDTO } from '../model/login.model';
import { Route, Router } from '@angular/router';


const baseUrl = 'http://localhost:8080/api/v1/user';
const headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserId = localStorage.getItem('userId');
  private currentRole = localStorage.getItem('role');
  
  private nav = new BehaviorSubject<string>(localStorage.getItem('useId') ? 'true' : 'false');
  public currentNav = this.nav.asObservable();

  constructor(private http: HttpClient,
    private router: Router) { }

  public update(id: string,  user: User): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, JSON.stringify(user), {headers:headers});
  }

  public getById(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/find/${id}`, {headers:headers});
  }

  public deleteById(id: string): Observable<any>{
    return this.http.delete<any>(`${baseUrl}/delete/${id}`, { headers:headers});
  }

  public handleLogin(credentials : LoginDTO){
    this.login(credentials)
    .pipe(catchError(()=>{
     alert('Credentials are not valid')
     return of();
    }))
     .subscribe((data) => {

      localStorage.setItem('userId', data.id? data.id : '-1');
      this.currentUserId = data.id;

      localStorage.setItem('role', data.role);
      this.currentRole = data.role
      
       this.nav.next('true');
       this.router.navigate(['edit']);
     });
   }
 
   private login(credentials: LoginDTO) {
     const headers = new HttpHeaders({
       'Content-Type': 'application/json'
     });
     return this.http.post<LogedUser>(`${baseUrl}/login`, JSON.stringify(credentials), { headers: headers })
   }

  public register(user:User):Observable<any>{
    console.log("haoooo")
    return this.http.post<any>(`${baseUrl}`, JSON.stringify(user), { headers: headers });
  }

   public getUserId(){
    return this.currentUserId;
  }

  public getRole(){
    return this.currentRole;
  }

  public logout():void {
    localStorage.removeItem('role');
    localStorage.clear();
    this.nav.next('false');
    this.router.navigate(['']);
  }
}
