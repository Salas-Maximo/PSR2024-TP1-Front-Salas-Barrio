import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from '../services/area.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.css']
})
export class AddAreaComponent {
  newArea: any = { id: null, name: '', jefes: {} };

  constructor(private areaService: AreaService, private router: Router, private location: Location) {}

  addArea(): void {
    this.areaService.addArea({ area: this.newArea }).subscribe(() => {
      this.router.navigate(['/areas']);
    });
  }

  cancel(): void {
    this.location.back();
  }
}
