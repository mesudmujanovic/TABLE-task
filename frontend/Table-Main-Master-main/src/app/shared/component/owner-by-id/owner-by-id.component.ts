import { Component } from '@angular/core';
import { Owner } from 'src/app/core/Interface/Owner';
import { OwnerService } from 'src/app/core/service/owner.service';
import { SessionStorageService } from 'src/app/core/service/session-storage.service';

@Component({
  selector: 'app-owner-by-id',
  templateUrl: './owner-by-id.component.html',
  styleUrls: ['./owner-by-id.component.scss']
})
export class OwnerByIdComponent {
  owner: Owner;

  constructor(private ownerService: OwnerService,
    private sessionStorageService: SessionStorageService) { }

  getOwnerById(cityId: number): void {
    this.ownerService.getOwnerById(cityId)
      .subscribe(owner => {
        console.log(owner);
        this.owner = owner;
      });
  }

  ngOnInit(): void {
    const ownerId = this.sessionStorageService.getItem('id');
    this.getOwnerById(ownerId);
  }
}
