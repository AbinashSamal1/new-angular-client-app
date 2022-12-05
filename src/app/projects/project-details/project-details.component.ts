import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from 'src/app/model/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  projectsDetails: any | undefined;

  constructor(private api: ProjectsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getProjectDetails(params['id']);
    });
  }
  getProjectDetails(id: number) {
    this.api.viewProjectDetails(id).subscribe((res: projects[]) => {
      this.projectsDetails = res;
    });
  }
}
