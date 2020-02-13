import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ProbenComponent } from './proben/proben.component';
import { GeschichteComponent } from './geschichte/geschichte.component';

// base line for new routes:
// { path: '', component:  }
const routes: Routes = [
  { path: '', redirectTo: '/willkommen', pathMatch: 'full' },
  { path: 'willkommen', component: StartPageComponent},
  { path: 'proben', component: ProbenComponent},
  { path: 'geschichte', component: GeschichteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
