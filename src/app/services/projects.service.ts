import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projects } from '../model/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  url: string = 'http://localhost:3000/projects/';

  constructor(private http: HttpClient) {}
  getProjects() {
    return this.http.get<projects[]>(this.url);
  }
  viewProjectDetails(id: number): Observable<projects[]> {
    return this.http.get<projects[]>(this.url + id);
  }
}
