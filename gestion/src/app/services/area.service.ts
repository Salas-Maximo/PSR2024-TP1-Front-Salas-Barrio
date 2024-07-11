import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private apiUrl = 'http://localhost:3000/api/areas';

  constructor(private http: HttpClient) { }

  getAreas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  addArea(area: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/add`, area, { headers });
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  addJefe(areaId: number, jefe: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/${areaId}/agregarJefe`, jefe, { headers });
  }
}
