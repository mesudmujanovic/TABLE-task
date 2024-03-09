import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Car } from 'src/app/core/Interface/car';
import { CarService } from 'src/app/core/service/car.service';

@Component({
  selector: 'app-car-get-all',
  templateUrl: './car-get-all.component.html',
  styleUrls: ['./car-get-all.component.scss']
})
export class CarGetAllComponent {
  cars$: Observable<Car[]>;
  pagedCars$: Observable<Car[]>;
  pageSize = 9;
  currentPage = 1;
  pages: number[] = [];
  cars: Car[] = [];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private carService: CarService) {
    this.searchForm = this.fb.group({
      name: ['']
    });
  }

  ngOnInit(): void {
    this.loadCars();
  }

  searchCars(): void {
    const name = this.searchForm.value.name;
    if (!name.trim()) {
      this.loadCars();
      return;
    }
    this.carService.searchCarsByName(name).subscribe(
      (data: Car[]) => {
        this.cars = data;
        this.calculatePages();
        this.setCurrentPage(1);
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  loadCars(): void {
    this.cars$ = this.carService.getAllCars().pipe(
      catchError((error: any) => {
        console.error('Error fetching cars:', error);
        return [];
      })
    );
    this.cars$.subscribe(cars => {
      this.cars = cars;
      this.calculatePages();
      this.setCurrentPage(1);
    });
  }


  getSafeImage(car: Car): string {
    if (car && car.image) {
      return 'data:image/jpeg;base64,' + car.image;
    } else {
      return '';
    }
  }

  calculatePages(): void {
    this.pages = [];
    const pageCount = Math.ceil(this.cars.length / this.pageSize);
    for (let i = 1; i <= pageCount; i++) {
      this.pages.push(i);
    }
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.cars.length);
    this.pagedCars$ = of(this.cars.slice(startIndex, endIndex));
  }
}
