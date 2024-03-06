import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerShowProfileService {

  private firstNameSource = new BehaviorSubject<string>(null);
  firstName$ = this.firstNameSource.asObservable();

  private logoutSource = new BehaviorSubject<boolean>(false);
  logout$ = this.logoutSource.asObservable();

  constructor() { }

  setFirstName(firstName: string): void {
    this.firstNameSource.next(firstName);
  }

  logout(): void {
    this.logoutSource.next(true);
  }
}
