import { Component, OnInit } from '@angular/core';
import { OwnerShowProfileService } from 'src/app/core/service/owner-show-profile.service';
import { SessionStorageService } from 'src/app/core/service/session-storage.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  firstName: string;

  constructor(private sessionStorageService: SessionStorageService,
    private showOwnerService: OwnerShowProfileService) {
  }

  ngOnInit(): void {
    const storedFirstName = this.sessionStorageService.getItem('firstName');
    if (storedFirstName !== null) {
      this.firstName = storedFirstName;
    }

    if (!this.firstName) {
      this.showOwnerService.firstName$.subscribe(firstName => {
        this.firstName = firstName;

        if (firstName) {
          this.sessionStorageService.setItem('firstName', firstName);
        }
      });
    }
    this.showOwnerService.logout$.subscribe(logout => {
      if (logout) {
        this.firstName = null;
      }
    });
  }

  logoutOwner(): void {
    this.sessionStorageService.removeItem("firstName");
    this.sessionStorageService.removeItem("id");
    this.showOwnerService.logout();
  }
}
