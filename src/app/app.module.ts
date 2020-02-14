import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './MaterialModule';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { ProbenComponent } from './proben/proben.component';
import { GeschichteComponent } from './geschichte/geschichte.component';
import { AuftritteComponent } from './auftritte/auftritte.component';
import { MusikerComponent } from './musiker/musiker.component';
import { VorstandComponent } from './vorstand/vorstand.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartPageComponent,
    ProbenComponent,
    GeschichteComponent,
    AuftritteComponent,
    MusikerComponent,
    VorstandComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
