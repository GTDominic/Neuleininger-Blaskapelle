import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './MaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { LOCALE_ID } from '@angular/core';

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
    AppRoutingModule,
    AmazingTimePickerModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de-DE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
