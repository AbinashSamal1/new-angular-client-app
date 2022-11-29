import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { client } from '../model/clientprojetcs.model';
import { ClientProjectsService } from '../services/client-projects.service';

@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.css'],
})
export class ClientProjectsComponent implements OnInit {
  projectDetails: any | undefined;

  constructor(
    private api: ClientProjectsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.clientProjectDetails(params['id']);
    });
  }

  clientProjectDetails(id: number) {
    this.api.viewDetails(id).subscribe((res: client[]) => {
      this.projectDetails = res;
    });
  }
}
