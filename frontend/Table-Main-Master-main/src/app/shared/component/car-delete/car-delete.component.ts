import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/core/service/car.service';
import { SessionStorageService } from 'src/app/core/service/session-storage.service';
import { DeleteModalService } from 'src/app/core/service/delete-modal.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.scss']
})
export class CarDeleteComponent {
  carId: number;
  isOpen: boolean;

  constructor(private carService: CarService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    public deleteModalService: DeleteModalService) { }

  ngOnInit(): void {
    this.carId = this.sessionStorageService.getItem('carId');
    this.deleteModalService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  deleteItem() {
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
  }

  openModal() {
    this.deleteModalService.openModal();
  }

  closeModal() {
    this.deleteModalService.closeModal();
  }

}
