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

  initializeUpdateCarForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  prepareUpdateFormData(carForm: FormGroup, selectedFile: File): any {
    return {
      name: carForm.get('name').value,
      image: selectedFile,
    };
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
}
