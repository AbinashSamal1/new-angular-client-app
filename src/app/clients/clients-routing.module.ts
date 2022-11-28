import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsModule } from '../projects/projects.module';
import { ClientsComponent } from './clients.component';

const routes: Routes = [{ path: '', component: ClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
