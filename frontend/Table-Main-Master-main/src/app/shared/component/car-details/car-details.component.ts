import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Car } from 'src/app/core/Interface/car';
import { CarService } from 'src/app/core/service/car.service';
import { ImageService } from 'src/app/core/service/image.service';
import { SessionStorageService } from 'src/app/core/service/session-storage.service';
import { UpdateDetailsCarService } from 'src/app/core/service/update-details-car.service';
import { UpdateModalService } from 'src/app/core/service/update-modal.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  car: Car;

  constructor(private route: ActivatedRoute,
    private carService: CarService,
    private imageService: ImageService,
    private sessionStorageService: SessionStorageService,
    private updateDetailsCarService: UpdateDetailsCarService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const carId = +params['id'];
      this.sessionStorageService.setItem('carId', carId);
      this.carService.getCarById(carId).subscribe(car => {
        this.car = car;
      });
    });

    this.updateDetailsCarService.car$.subscribe(car => {
      this.car = car;
    });
  }

  getSafeImage(car: Car): string {
    return this.imageService.getSafeImage(car);
  }
}
