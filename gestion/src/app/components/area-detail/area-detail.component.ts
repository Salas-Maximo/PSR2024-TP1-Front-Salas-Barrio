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
  newJefe: any = { id: null, name: '' };

  constructor(
    private route: ActivatedRoute,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    this.loadArea();
  }

  loadArea(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.areaService.getAreas().subscribe(data => {
      this.area = data.areas.find((a:any) => a.id == id);
    });
  }
  
  addJefe(): void {
    const areaId = Number(this.route.snapshot.paramMap.get('id'));
    this.areaService.addJefe(areaId, this.newJefe).subscribe(() => {
      this.loadArea();
      this.newJefe = { id: null, name: '' };
    });
  }
  
}
