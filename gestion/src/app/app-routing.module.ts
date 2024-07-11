import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaDetailComponent } from './components/area-detail/area-detail.component';
import { JefeDetailComponent } from './components/jefe-detail/jefe-detail.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { AddAreaComponent } from './add-area/add-area.component';
import { AddJefeComponent } from './add-jefe/add-jefe.component';

const routes: Routes = [
  { path: '', redirectTo: '/areas', pathMatch: 'full' },
  { path: 'areas', component: AreaListComponent },
  { path: 'area/:id', component: AreaDetailComponent },
  { path: 'jefe/:id', component: JefeDetailComponent },
  { path: 'add-jefe/:areaId', component: AddJefeComponent },
  { path: 'personal/:id', component: PersonalDetailComponent },
  { path: 'add-area', component: AddAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
