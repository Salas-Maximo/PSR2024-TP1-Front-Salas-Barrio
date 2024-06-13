import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-jefe-detail',
  templateUrl: './jefe-detail.component.html',
  styleUrls: ['./jefe-detail.component.css']
})
export class JefeDetailComponent implements OnInit {
  jefe: any;
  area: any;

  constructor(
    private route: ActivatedRoute,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.areaService.getAreas().subscribe(data => {
      for (let area of data.areas) {
        const jefe = area.jefes.find((j: { id: string | null; }) => j.id == id);
        if (jefe) {
          this.jefe = jefe;
          this.area = area;
          break;
        }
      }
    });
  }
}
