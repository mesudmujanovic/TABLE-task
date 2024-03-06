import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroments';
import { Owner } from '../Interface/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(`${this.baseUrl}${environment.saveOwner}`, owner)
      .pipe(
        catchError(error => {
          console.error('Error in creating owner:', error);
          return throwError('Error in creating owner. Please try again.');
        })
      );
  }

  getOwnerById(cityId: number): Observable<Owner> {
    const url = `${this.baseUrl}/owner/${cityId}`;
    return this.http.get<Owner>(url);
  }
}
