import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetsComponent } from './timesheets.component';

const routes: Routes = [
  { path: '', redirectTo: 'timesheets', pathMatch: 'full' },
  { path: '', component: TimesheetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimesheetsRoutingModule {}
