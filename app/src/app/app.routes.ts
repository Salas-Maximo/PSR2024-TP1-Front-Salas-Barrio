import { Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { JefeComponent } from './jefe/jefe.component';


export const routes: Routes = [
    {path: "area", component: AreaComponent},
    {path: "", component:HomeComponent},
    {path: "personal", component:PersonalComponent},
    {path: "jefe", component: JefeComponent}
];
