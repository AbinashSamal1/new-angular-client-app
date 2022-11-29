import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientsDetailComponent } from './clients-detail/clients-detail.component';
import { ClientsComponent } from './clients.component';

@NgModule({
  declarations: [ClientsDetailComponent, ClientsComponent],
  imports: [CommonModule, ClientsRoutingModule, HttpClientModule],
})
export class ClientsModule {}
