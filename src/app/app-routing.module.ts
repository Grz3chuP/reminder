import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RejestrTerminowComponent} from "./rejestr-terminow/rejestr-terminow.component";
import {RejestrSrodkowComponent} from "./rejestr-srodkow/rejestr-srodkow.component";
import {DodajNowyComponent} from "./dodaj-nowy/dodaj-nowy.component";

const routes: Routes = [
  { path: '', redirectTo: 'termin', pathMatch: 'full'},
  { path: 'termin', component: RejestrTerminowComponent },
  { path: 'srodki', component: RejestrSrodkowComponent },
  { path: 'nowy', component: DodajNowyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
