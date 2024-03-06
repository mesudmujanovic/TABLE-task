import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../Interface/car';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsCarService {


  private carSubject = new BehaviorSubject<Car>(null);
  car$ = this.carSubject.asObservable();

  setCar(car: Car): void {
    this.carSubject.next(car);
  }
}
