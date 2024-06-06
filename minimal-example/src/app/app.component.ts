import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService] // Provide ApiService here
})
export class AppComponent implements OnInit {
  areas: any[] = []; // Initialize an empty array to store areas data

  constructor(private apiService: ApiService) {
      console.log(this.apiService); // Should log an instance of ApiService
  }

  ngOnInit() {
    this.apiService.getAreas()
      .subscribe(data => {
        this.areas = data;
      });
  }
}
