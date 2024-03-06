import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { OwnerShowProfileService } from 'src/app/core/service/owner-show-profile.service';
import { OwnerService } from 'src/app/core/service/owner.service';
import { SessionStorageService } from 'src/app/core/service/session-storage.service';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent {
  ownerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private ownerService: OwnerService,
    private ownerShowProfileService: OwnerShowProfileService,
    private sessionStorageService: SessionStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ownerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  get firstName() {
    return this.ownerForm.get('firstName');
  }

  get lastName() {
    return this.ownerForm.get('lastName');
  }

  get phoneNumber() {
    return this.ownerForm.get('phoneNumber');
  }

  onSubmit() {
    if (this.ownerForm.valid) {
      const firstName = this.ownerForm.get('firstName').value;

      this.ownerService.createOwner(this.ownerForm.value).pipe(
        switchMap(response => {
          this.ownerForm.reset();
          this.sessionStorageService.setItem("id", response.id);
          this.sessionStorageService.setItem("firstName", firstName);
          this.ownerShowProfileService.setFirstName(firstName);
          this.router.navigate(['/owner-by-id']);
          return of(null);
        }),
      ).subscribe(
        () => { },
        error => {
          console.error('Error in creating owner:', error);
        }
      );
    }
  }
}
