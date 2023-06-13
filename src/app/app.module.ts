import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './components/user/register/register.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './components/user/login/login.component';
import { CreateAccommodationComponent } from './components/accommodation/create-accommodation/create-accommodation.component';
import { AccommodationPageComponent } from './components/accommodation/accommodation-page/accommodation-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { HostAccommodationComponent } from './components/reservation/host-accommodation/host-accommodation.component';
import { ViewAccommodationComponent } from './components/accommodation/view-accommodation/view-accommodation.component';
import { AddAvailablePeriodComponent } from './components/accommodation/add-available-period/add-available-period/add-available-period.component';
import { EditComponent } from './components/user/edit/edit/edit.component';
import { GuestReservationComponent } from './components/reservation/guest-reservation/guest-reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    CreateAccommodationComponent,
    AccommodationPageComponent,
    HostAccommodationComponent,
    ViewAccommodationComponent,
    AddAvailablePeriodComponent,
    EditComponent,
    GuestReservationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
