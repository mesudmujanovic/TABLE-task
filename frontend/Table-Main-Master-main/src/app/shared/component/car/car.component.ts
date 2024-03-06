import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Car } from 'src/app/core/Interface/car';
import { CarFormLogicService } from 'src/app/core/service/car-form-logic.service';
import { CarService } from 'src/app/core/service/car.service';
import { SessionStorageService } from 'src/app/core/service/session-storage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  carForm: FormGroup;
  selectedFile: File;
  isLoggedIn: boolean = false;
  selectedFileName: string = 'No file selected';

  constructor(private carService: CarService,
    private carFormLogic: CarFormLogicService,
    private sessionStorageService: SessionStorageService) {
    this.carForm = this.carFormLogic.initializeCarForm();
  }

  onSubmit(): void {
    const formData: Car = this.carFormLogic.prepareFormData(this.carForm, this.selectedFile);
    const ownerId: number = this.sessionStorageService.getItem("id");

    this.carService.saveCar(formData, ownerId).pipe(
      catchError(error => {
        console.error('Error saving car:', error);
        return of(null);
      })
    ).subscribe(
      (savedCar) => {
        if (savedCar) {
          alert("Auto je uspesno sacuvan")
          console.log('Car saved successfully:', savedCar);
          this.carForm.reset();
        }
      }
    )
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.selectedFileName = this.selectedFile.name;
    } else {
      this.selectedFileName = 'No file selected';
    }
  }

  ngOnInit() {
    const firstName = sessionStorage.getItem('firstName');
    if (firstName) {
      this.isLoggedIn = true;
    }
  }
}
