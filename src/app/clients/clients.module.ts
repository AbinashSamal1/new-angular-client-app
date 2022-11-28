import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClientsRoutingModule, HttpClientModule],
})
export class ClientsModule {}
