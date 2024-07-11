import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: any[] = [];
  newArea: any = { id: null, name: '', jefes: {} };

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.loadAreas();
  }

  loadAreas(): void {
    this.areaService.getAreas().subscribe(data => {
      this.areas = data.areas;
    });
  }

  addArea(): void {
    this.areaService.addArea({ area: this.newArea }).subscribe(() => {
      this.loadAreas();
      this.newArea = { id: null, name: '', jefes: {} };
    });
  }

  deleteArea(id: number): void {
    this.areaService.deleteArea(id).subscribe(() => {
      this.loadAreas();
    });
  }
}
