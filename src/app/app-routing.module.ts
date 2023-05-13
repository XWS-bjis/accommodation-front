import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { CreateAccommodationComponent } from './components/accommodation/create-accommodation/create-accommodation.component';
import { AccommodationPageComponent } from './components/accommodation/accommodation-page/accommodation-page.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-accommodation', component : CreateAccommodationComponent},
  {path: 'accommodations', component: AccommodationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
