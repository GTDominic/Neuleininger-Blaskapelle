import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ProbenComponent } from './proben/proben.component';

// base line for new routes:
// { path: '', component:  }
const routes: Routes = [
  { path: '', redirectTo: '/willkommen', pathMatch: 'full' },
  { path: 'willkommen', component: StartPageComponent},
  { path: 'proben', component: ProbenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
