import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  // Define methods for each API endpoint you want to call

  // Areas Endpoints
  getAreas(): Observable<any> {
    return this.http.get(`${this.baseUrl}${API_PATHS.Areas.Base}${API_PATHS.Areas.Get}`);
  }

  // ... (other Area methods like add, update, delete can be added here)

  // Jefes Endpoints
  getJefes(areaId: number): Observable<any> {
    const url = `${this.baseUrl}${API_PATHS.Jefes.Base}${areaId}${API_PATHS.Jefes.Get}`;
    return this.http.get(url);
  }

  // ... (other Jefe methods like add, update, delete can be added here)

  // Personales Endpoints
  getPersonales(areaId: number, jefeId: number): Observable<any> {
    const url = `${this.baseUrl}${API_PATHS.Personales.Base}${areaId}${API_PATHS.Personales.Get}`;
    return this.http.get(url);
  }

  // ... (other Personal methods like add, update, delete can be added here)
}

// Define a constant for your API paths for better readability
const API_PATHS = {
  Areas: {
    Base: '/areas',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
    AgregarJefe: '/:id/agregarJefe',
  },
  Jefes: {
    Base: '/areas/:idA/',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:idB',
    AgregarPersonal: '/jefes/:idB/agregarPersonal',
  },
  Personales: {
    Base: '/areas/:idA/jefes/:idB/',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:idC',
    AgregarPersonal: '/jefes/:idB/agregarPersonal'
  }
} as const;