import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProjectsComponent } from '../client-projects/client-projects.component';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: ':id', component: ClientsDetailComponent },
  { path: ':id/projects', component: ClientProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
