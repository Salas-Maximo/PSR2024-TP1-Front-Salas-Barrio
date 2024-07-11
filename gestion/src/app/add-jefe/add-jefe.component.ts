import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from '../services/area.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-jefe',
  templateUrl: './add-jefe.component.html',
  styleUrls: ['./add-jefe.component.css']
})
export class AddJefeComponent implements OnInit {
  newJefe: any = { id: null, name: '' };
  areaId!: number;

  constructor(
    private route: ActivatedRoute,
    private areaService: AreaService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.areaId = Number(this.route.snapshot.paramMap.get('areaId'));
  }

  addJefe(): void {
    this.areaService.addJefe(this.areaId, this.newJefe).subscribe(() => {
      this.router.navigate(['/area', this.areaId]);
    });
  }

  cancel(): void {
    this.location.back();
  }
}
