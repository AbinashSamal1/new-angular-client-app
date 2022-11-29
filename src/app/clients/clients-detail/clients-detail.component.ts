import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { client } from 'src/app/model/clientprojetcs.model';
import { ClientProjectsService } from 'src/app/services/client-projects.service';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.css'],
})
export class ClientsDetailComponent implements OnInit {
  clientDetails: any | undefined;

  constructor(
    private api: ClientProjectsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.getClientDetails(params['id']);
    });
  }

  getClientDetails(id: number) {
    this.api.viewDetails(id).subscribe((res: client[]) => {
      this.clientDetails = res;
      console.log('res', res);
    });
  }
}
