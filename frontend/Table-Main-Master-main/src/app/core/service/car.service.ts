import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroments';
import { Car } from '../Interface/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  saveCar(car: Car, ownerId: number): Observable<Car> {
    const formData: FormData = new FormData();
    formData.append('name', car.name);
    formData.append('color', car.color);
    formData.append('numberOfSeats', car.numberOfSeats);
    formData.append('image', car.image);
    formData.append('enginePower', car.enginePower);
    formData.append('transmissionType', car.transmissionType);
    formData.append('registrationDate', car.registrationDate);
    formData.append('price', car.price);
    return this.http.post<Car>(`${this.baseUrl}${environment.saveCarUrl}/owner/${ownerId}`, formData);
  }

  updateCar(carId: number, car: Car): Observable<Car> {
    const formData: FormData = new FormData();
    formData.append('name', car.name);
    formData.append('image', car.image);
    formData.append('numberOfSeats', car.numberOfSeats);
    formData.append('enginePower', car.enginePower);
    formData.append('transmissionType', car.transmissionType);
    formData.append('registrationDate', car.registrationDate);
    formData.append('price', car.price);
    return this.http.put<Car>(`${this.baseUrl}${environment.updateCarUrl}/${carId}`, formData);
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}${environment.getAllCarsUrl}`).pipe(
      catchError((error: any) => {
        console.error('Error fetching cars:', error);
        return throwError(error);
      })
    );
  }
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}${environment.getCarByIdUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error(`Error fetching car with ID ${id}:`, error);
        return throwError(error);
      })
    );
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${environment.deleteCarByIdUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error(`Error deleting car with ID ${id}:`, error);
        return throwError(error);
      }),
      tap(() => {
        console.log(`Car with ID ${id} successfully deleted`);
      })
    )
  }

  searchCarsByName(name: string): Observable<Car[]> {
    const url = `${this.baseUrl}/searchByName?name=${name}`;
    return this.http.get<Car[]>(url);
  }


}
