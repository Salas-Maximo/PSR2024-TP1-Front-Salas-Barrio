import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: any[] = [];

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.areaService.getAreas().subscribe(data => {
      this.areas = data.areas;
    });
  }
}
