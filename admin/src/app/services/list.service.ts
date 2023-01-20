import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List } from '../interfaces/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/list'
   }

   registraList(list: List): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, list);
   }

   listarList(list: List): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/home`, list)
   }
}
