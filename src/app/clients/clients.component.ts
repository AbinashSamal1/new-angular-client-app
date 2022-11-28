import { Component, Input, OnInit } from '@angular/core';
import { client } from '../model/clientprojetcs.model';
import { ClientProjectsService } from '../services/client-projects.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clientList: client[] = [];
  constructor(private api: ClientProjectsService) {}

  ngOnInit(): void {
    this.getClientData();
  }
  
  getClientData() {
    this.api.getClient().subscribe((res) => {
      this.clientList = res;
    });
  }
}
