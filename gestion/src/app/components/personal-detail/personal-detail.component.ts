import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {
  persona: any;
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
        for (let jefe of area.jefes) {
          const persona = jefe.personal.find((p: { id: string | null; }) => p.id == id);
          if (persona) {
            this.persona = persona;
            this.jefe = jefe;
            this.area = area;
            break;
          }
        }
        if (this.persona) break;
      }
    });
  }
}
