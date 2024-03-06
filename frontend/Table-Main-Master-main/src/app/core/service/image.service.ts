import { Injectable } from '@angular/core';
import { Car } from '../Interface/car';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getSafeImage(car: Car): string {
    if (car && car.image) {
      return 'data:image/jpeg;base64,' + car.image;
    } else {
      return '';
    }
  }
}
