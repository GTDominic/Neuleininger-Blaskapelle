import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ProbenComponent } from './proben/proben.component';
import { GeschichteComponent } from './geschichte/geschichte.component';
import { AuftritteComponent } from './auftritte/auftritte.component';
import { MusikerComponent } from './musiker/musiker.component';
import { VorstandComponent } from './vorstand/vorstand.component';

// base line for new routes:
// { path: '', component:  }
const routes: Routes = [
  { path: '', redirectTo: '/willkommen', pathMatch: 'full' },
  { path: 'willkommen', component: StartPageComponent},
  { path: 'proben', component: ProbenComponent},
  { path: 'geschichte', component: GeschichteComponent },
  { path: 'auftritte', component:  AuftritteComponent},
  { path: 'musiker', component:  MusikerComponent},
  { path: 'vorstand', component:  VorstandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
