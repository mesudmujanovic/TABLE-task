import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './shared/component/car-details/car-details.component';
import { CarGetAllComponent } from './shared/component/car-get-all/car-get-all.component';
import { CarComponent } from './shared/component/car/car.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { UnknowPageComponent } from './pages/unknow-page/unknow-page.component';
import { CreateOwnerComponent } from './shared/component/create-owner/create-owner.component';
import { OwnerByIdComponent } from './shared/component/owner-by-id/owner-by-id.component';

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'createOwner', component: CreateOwnerComponent },
  { path: 'getAll', component: CarGetAllComponent },
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'unknown-page', component: UnknowPageComponent },
  { path: 'owner-by-id', component: OwnerByIdComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
