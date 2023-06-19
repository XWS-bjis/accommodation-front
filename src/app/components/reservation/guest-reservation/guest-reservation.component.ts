import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { ReservationDTO } from '../model/reservation.model';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-guest-reservation',
  templateUrl: './guest-reservation.component.html',
  styleUrls: ['./guest-reservation.component.css']
})
export class GuestReservationComponent implements OnInit {

  public reservations:ReservationDTO[] = [];
  public id:string = "1"

  constructor(private reservationservice:ReservationService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.reservationservice.getAllByUser(this.userService.getUserId() || "-1").subscribe((data)=>{
      this.reservations = data
      console.log(this.reservations)
    })
  }

  deleteReservation(id:string){
    this.reservationservice.deleteById(id).subscribe(()=>{
      
    })
  }

}
