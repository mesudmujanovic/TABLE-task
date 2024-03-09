import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, switchMap } from 'rxjs';
import { Car } from 'src/app/core/Interface/car';
import { CarFormLogicService } from 'src/app/core/service/car-form-logic.service';
import { CarService } from 'src/app/core/service/car.service';
import { UpdateDetailsCarService } from 'src/app/core/service/update-details-car.service';
import { UpdateModalService } from 'src/app/core/service/update-modal.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.scss']
})
export class CarUpdateComponent {
  carForm: FormGroup;
  selectedFile: File;
  showForm: boolean = false;
  car: Car;
  carId: number;
  isOpen: boolean;

  constructor(
    private carService: CarService,
    private carFormLogicService: CarFormLogicService,
    private activatedRoute: ActivatedRoute,
    public updateModalService: UpdateModalService,
    public updateDetailsCar: UpdateDetailsCarService) {
  }

  onUpdateSubmit(): void {
    const formData: Car = this.carFormLogicService.prepareUpdateFormData(
      this.carForm,
      this.selectedFile
    );

    this.carService.updateCar(this.carId, formData)
      .pipe(
        catchError((error) => {
          this.updateModalService.closeModal();
          console.error('Error updating car:', error);
          throw error;
        })
      )
      .subscribe((updatedCar) => {
        this.updateDetailsCar.setCar(updatedCar);
      });
  }

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  openModal() {
    this.updateModalService.openModal();
  }

  closeModal() {
    this.updateModalService.closeModal();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.carId = +params['id'];
      this.carService.getCarById(this.carId).subscribe();
    });
    this.updateModalService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.carForm = this.carFormLogicService.initializeUpdateCarForm();
  }
}
