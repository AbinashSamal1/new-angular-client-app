import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { client } from '../model/clientprojetcs.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientProjectsService {
  url: string = 'http://localhost:3000/clients/';

  constructor(private http: HttpClient) {}
  getClient() {
    return this.http.get<client[]>(this.url);
  }
  viewDetails(id: number): Observable<client[]> {
    return this.http.get<client[]>(this.url +id);
  }
}
