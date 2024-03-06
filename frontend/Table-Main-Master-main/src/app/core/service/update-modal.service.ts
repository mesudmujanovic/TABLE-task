import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateModalService {

  isOpen$ = new BehaviorSubject<boolean>(false);

  openModal() {
    this.isOpen$.next(true);
  }

  closeModal() {
    this.isOpen$.next(false);
  }
}
