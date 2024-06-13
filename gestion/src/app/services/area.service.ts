import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private apiUrl = 'http://localhost:3000/api/areas/all';
  private addApiUrl = 'http://localhost:3000/api/areas/add';

  constructor(private http: HttpClient) { }

  getAreas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addArea(area: any): Observable<any> {
    return this.http.post<any>(this.addApiUrl, { area });
  }
}
