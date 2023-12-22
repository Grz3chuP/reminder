import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RejestrTerminowComponent } from './rejestr-terminow/rejestr-terminow.component';
import { RejestrSrodkowComponent } from './rejestr-srodkow/rejestr-srodkow.component';
import { DodajNowyComponent } from './dodaj-nowy/dodaj-nowy.component';

@NgModule({
  declarations: [
    AppComponent,
    RejestrTerminowComponent,
    RejestrSrodkowComponent,
    DodajNowyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
