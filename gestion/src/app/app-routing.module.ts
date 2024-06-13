import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaDetailComponent } from './components/area-detail/area-detail.component';
import { JefeDetailComponent } from './components/jefe-detail/jefe-detail.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/areas', pathMatch: 'full' },
  { path: 'areas', component: AreaListComponent },
  { path: 'area/:id', component: AreaDetailComponent },
  { path: 'jefe/:id', component: JefeDetailComponent },
  { path: 'personal/:id', component: PersonalDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
