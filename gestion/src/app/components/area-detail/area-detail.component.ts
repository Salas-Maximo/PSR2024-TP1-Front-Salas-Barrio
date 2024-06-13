import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.css']
})
export class AreaDetailComponent implements OnInit {
  area: any;

  constructor(
    private route: ActivatedRoute,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.areaService.getAreas().subscribe(data => {
      this.area = data.areas.find((a: { id: string | null; }) => a.id == id);
    });
  }
}
