import { TestBed } from '@angular/core/testing';

import { CarService } from './car.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../enviroments/enviroments";
import {Car} from "../Interface/car";

fdescribe('CarService', () => {
  let service: CarService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService]
    });
    service = TestBed.inject(CarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save car', () => {
    const ownerId = 1;
    const car: Car = {
      name: 'Test Car',
      color: 'Blue',
      numberOfSeats: '5',
      enginePower: '200hp',
      transmissionType: 'Automatic',
      registrationDate: '2022-03-07',
      image: new File([], 'updated.jpg'),
      price: '20000'
    };

    service.saveCar(car, ownerId).subscribe(savedCar => {
      expect(savedCar).toEqual(car);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}${environment.saveCarUrl}/owner/${ownerId}`);
    expect(req.request.method).toBe('POST');
    req.flush(car);
  });

  it('should update a car', () => {
    const carId = 1;
    const car: Car = {
      name: 'Updated Car',
      color: 'Blue',
      numberOfSeats: '5',
      enginePower: '250hp',
      transmissionType: 'Manual',
      registrationDate: '2022-01-01',
      image: new File([], 'updated.jpg'),
      price: '60000'
    };

    service.updateCar(carId, car).subscribe(updatedCar => {
      expect(updatedCar).toEqual(car);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}${environment.updateCarUrl}/${carId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(car);
  });

  it('should get all cars', () => {
    const dummyCars: Car[] = [
      { id: 1, name: 'Car 1', color: 'Red', numberOfSeats: '4', enginePower: '200hp', transmissionType: 'Automatic', registrationDate: '2021-01-01', image: new File([], 'car1.jpg'), price: '50000' },
      { id: 2, name: 'Car 2', color: 'Blue', numberOfSeats: '5', enginePower: '250hp', transmissionType: 'Manual', registrationDate: '2020-01-01', image: new File([], 'car2.jpg'), price: '60000' }
    ];

    service.getAllCars().subscribe(cars => {
      expect(cars.length).toBe(2);
      expect(cars).toEqual(dummyCars);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}${environment.getAllCarsUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCars);
  });

  it('should get car by id', () => {
    const carId = 1;
    const dummyCar: Car =
        { id: 1, name: 'Car 1', color: 'Red', numberOfSeats: '4', enginePower: '200hp',
          transmissionType: 'Automatic', registrationDate: '2021-01-01', image: new File([], 'car1.jpg'), price: '50000' };

    service.getCarById(carId).subscribe(car => {
      expect(car).toEqual(dummyCar);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}${environment.getCarByIdUrl}/${carId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCar);
  });

  it('should delete car', () => {
    const carId = 1;

    service.deleteCar(carId).subscribe(() => {
      expect().nothing();
    });

    const req = httpMock.expectOne(`${environment.apiUrl}${environment.deleteCarByIdUrl}/${carId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should search cars by name', () => {
    const name = 'Test Car';
    const dummyCars: Car[] = [
      { id: 1, name: 'Car 1', color: 'Red', numberOfSeats: '4', enginePower: '200hp',
        transmissionType: 'Automatic', registrationDate: '2021-01-01', image: new File([], 'car1.jpg'), price: '50000' },
      { id: 1, name: 'Car 2', color: 'Red', numberOfSeats: '4', enginePower: '200hp',
        transmissionType: 'Automatic', registrationDate: '2021-01-01', image: new File([], 'car1.jpg'), price: '50000' }
  ];

    service.searchCarsByName(name).subscribe(cars => {
      expect(cars.length).toBe(2);
      expect(cars).toEqual(dummyCars);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/searchByName?name=${name}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCars);
  });
});
