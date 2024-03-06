import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../Interface/car';

@Injectable({
  providedIn: 'root'
})
export class CarFormLogicService {

  constructor(private formBuilder: FormBuilder) { }

  initializeCarForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      numberOfSeats: ['', Validators.required],
      enginePower: ['', Validators.required],
      transmissionType: ['', Validators.required],
      registrationDate: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  prepareFormData(carForm: FormGroup, selectedFile: File): Car {
    return {
      name: carForm.get('name').value,
      color: carForm.get('color').value,
      numberOfSeats: carForm.get('numberOfSeats').value,
      enginePower: carForm.get('enginePower').value,
      transmissionType: carForm.get('transmissionType').value,
      registrationDate: carForm.get('registrationDate').value,
      image: selectedFile,
      price: carForm.get('price').value
    };
  }

  setSelectedFile(event): File {
    return event.target.files[0];
  }

  updateCarFormData(carForm: FormGroup, car: Car): void {
    carForm.patchValue({
      name: car.name,
      color: car.color,
      numberOfSeats: car.numberOfSeats,
      enginePower: car.enginePower,
      transmissionType: car.transmissionType,
      registrationDate: car.registrationDate,
      image: car.image,
    });
  }
}
