import { Component, OnInit } from '@angular/core';
import { projects } from '../model/project.model';
import { ClientProjectsService } from '../services/client-projects.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsList: projects[] = [];

  constructor(private api: ProjectsService) {}

  ngOnInit(): void {
    this.getProjectsList();
  }
  getProjectsList() {
    this.api.getProjects().subscribe((res) => {
      this.projectsList = res;
    });
  }
}
