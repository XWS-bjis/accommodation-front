import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { CreateAccommodationComponent } from './components/accommodation/create-accommodation/create-accommodation.component';
import { HostAccommodationComponent } from './components/reservation/host-accommodation/host-accommodation.component';
import { ViewAccommodationComponent } from './components/accommodation/view-accommodation/view-accommodation.component';
import { AddAvailablePeriodComponent } from './components/accommodation/add-available-period/add-available-period/add-available-period.component';
import { EditComponent } from './components/user/edit/edit/edit.component';
import { GuestReservationComponent } from './components/reservation/guest-reservation/guest-reservation.component';
import { ViewVisitedAccommodationsComponent } from './components/accommodation/view-visited-accommodations/view-visited-accommodations.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-accommodation', component : CreateAccommodationComponent},
  {path: 'host-accommodations', component : HostAccommodationComponent},
  {path: 'accommodation/:id', component : ViewAccommodationComponent},
  {path: 'addAvailablePeriod/:id', component: AddAvailablePeriodComponent},
  {path: 'edit', component : EditComponent},
  {path: 'guest-reservation', component : GuestReservationComponent},
  {path: 'visited-accommodations', component : ViewVisitedAccommodationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
