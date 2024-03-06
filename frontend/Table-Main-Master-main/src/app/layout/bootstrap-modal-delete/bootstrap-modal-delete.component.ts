import { Component } from '@angular/core';
import { DeleteModalService } from 'src/app/core/service/delete-modal.service';

@Component({
  selector: 'app-bootstrap-modal-delete',
  templateUrl: './bootstrap-modal-delete.component.html',
  styleUrls: ['./bootstrap-modal-delete.component.scss']
})
export class BootstrapModalDeleteComponent {
  isOpen: boolean;

  constructor(private deleteModalService: DeleteModalService) { }

  ngOnInit(): void {
    this.deleteModalService.isOpen$.subscribe(isOpen => {
      console.log("isOpen value in DeleteModalCComponent:", isOpen);
      this.isOpen = isOpen;
    });
  }
  closeModal() {
    this.deleteModalService.closeModal();
  }
}
