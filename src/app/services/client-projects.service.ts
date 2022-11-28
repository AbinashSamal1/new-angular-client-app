import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { client } from '../model/clientprojetcs.model';


@Injectable({
  providedIn: 'root',
})
export class ClientProjectsService {
  url: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}
  getClient() {
    return this.http.get<client[]>(this.url);
  }
}
