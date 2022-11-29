import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { client } from '../model/clientprojetcs.model';
import { ClientProjectsService } from '../services/client-projects.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clientList: client[] = [];
  constructor(private api: ClientProjectsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getCLientName();
  }
  getCLientName() {
    this.api.getClient().subscribe((res) => {
      this.clientList = res;
    });
  }

  // countNumOfProject() {
  //   const result = this.clientList
  //     .map((res) => res.project.length)
  //     .reduce((acc, ele) => acc + ele, 0);
  //   console.log('result', result);
  // }
}
