import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/core/service/car.service';
import { SessionStorageService } from 'src/app/core/service/session-storage.service';
import { DeleteModalService } from 'src/app/core/service/delete-modal.service';
import {Car} from "../../../core/Interface/car";

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.scss']
})
export class CarDeleteComponent {
  carId: number;
  isOpen: boolean;
  ownerId: number;
  car: Car;
  carOwnerId: number;

  constructor(private carService: CarService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    public deleteModalService: DeleteModalService) { }

  ngOnInit(): void {
      this.ownerId = this.sessionStorageService.getItem('id');
    this.carId = this.sessionStorageService.getItem('carId');
    console.log(this.carId)
    this.deleteModalService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

    this.carService.getCarById(this.carId).subscribe((car: Car) => {
      this.car = car;
      this.carOwnerId = car.ownerId
      console.log("oID",this.carOwnerId);
    });


  }

  deleteItem() {

   if(this.ownerId == this.carOwnerId){
     console.log("proslo")
     this.carService.deleteCar(this.carId).subscribe(
       () => {
         console.log("Car successfully deleted");
         this.deleteModalService.closeModal();
         this.router.navigate(['/']);
       },
       (error) => {
         console.error("Error deleting car:", error);
         this.deleteModalService.closeModal();
       }
     );
   } else {
     alert("Ne mozete izbrisati oglas drugog ownera")
   }
  }

  openModal() {
    this.deleteModalService.openModal();
  }

  closeModal() {
    this.deleteModalService.closeModal();
  }

}
