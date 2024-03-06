import { Component } from '@angular/core';
import { Car } from 'src/app/core/Interface/car';
import { CarService } from 'src/app/core/service/car.service';
import { ImageService } from 'src/app/core/service/image.service';

@Component({
  selector: 'app-car-get-by-id',
  templateUrl: './car-get-by-id.component.html',
  styleUrls: ['./car-get-by-id.component.scss']
})
export class CarGetByIdComponent {
  car: Car;

  constructor(private carService: CarService,
    private imageService: ImageService) { }

  getImageById() {
    const id = 16;
    this.carService.getCarById(id).subscribe(
      (response: any) => {
        this.car = response;
      },
      (error) => {
        console.error('Greška pri dohvatanju osobe:', error);
      }
    );
  }

  getSafeImage(): string {
    return this.imageService.getSafeImage(this.car);
  }

  ngOnInit() {
    this.getImageById();
  }
}
