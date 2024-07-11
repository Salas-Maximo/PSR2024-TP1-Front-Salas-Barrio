import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaDetailComponent } from './components/area-detail/area-detail.component';
import { JefeDetailComponent } from './components/jefe-detail/jefe-detail.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { AreaService } from './services/area.service';
import { AddAreaComponent } from './add-area/add-area.component';
import { AddJefeComponent } from './add-jefe/add-jefe.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaListComponent,
    AreaDetailComponent,
    JefeDetailComponent,
    PersonalDetailComponent,
    AddAreaComponent,
    AddJefeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AreaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
