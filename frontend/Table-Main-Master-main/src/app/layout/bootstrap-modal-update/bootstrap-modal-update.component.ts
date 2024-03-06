import { Component, ViewChild } from '@angular/core';
import { UpdateModalService } from 'src/app/core/service/update-modal.service';

@Component({
  selector: 'app-bootstrap-modal-update',
  templateUrl: './bootstrap-modal-update.component.html',
  styleUrls: ['./bootstrap-modal-update.component.scss']
})
export class BootstrapModalUpdateComponent {
  isOpen: boolean;

  constructor(private updateModalService: UpdateModalService) {
  }

  ngOnInit(): void {
    this.updateModalService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  closeModal() {
    this.updateModalService.closeModal();
  }
}
