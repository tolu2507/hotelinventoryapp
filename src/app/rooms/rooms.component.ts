import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeadersComponent } from '../headers/headers.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Paris Hilton Hotel';
  numberOfRooms = 100;
  hideRooms = false;
  roomSelected!: RoomList;
  rooms: Room = { availableRooms: 15, bookedRooms: 20, totalRooms: 40 };
  title = 'Room List';
  roomList: RoomList[] = [];

  @ViewChild(HeadersComponent, {static:true}) headerComponent!: HeadersComponent

  constructor() {}

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomType: 'Deluxe rOOM',
        amenities: 'Air conditioner, Free Wi-fi, TV,Bathroom,Kitchen',
        price: 5000,
        photos:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F106399%2Fpexels-photo-106399.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhouse%2F&tbnid=flS54evcKFgFMM&vet=12ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ..i&docid=w_edFuvJNI2ApM&w=5408&h=3605&itg=1&q=free%20house%20pictures&ved=2ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ',
        checkinTime: new Date('11-Decemenber-2022'),
        checkOutTime: new Date('12-Decemenber-2022'),
      },
      {
        roomType: 'Mini-Deluxe rOOM',
        amenities: 'Air conditioner, Free Wi-fi, TV,Bathroom,Kitchen',
        price: 15000,
        photos:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F106399%2Fpexels-photo-106399.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhouse%2F&tbnid=flS54evcKFgFMM&vet=12ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ..i&docid=w_edFuvJNI2ApM&w=5408&h=3605&itg=1&q=free%20house%20pictures&ved=2ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ',
        checkinTime: new Date('13-Decemenber-2022'),
        checkOutTime: new Date('15-Decemenber-2022'),
      },
      {
        roomType: 'Private rOOM',
        amenities: 'Air conditioner, Free Wi-fi, TV,Bathroom,Kitchen',
        price: 35000,
        photos:
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F106399%2Fpexels-photo-106399.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhouse%2F&tbnid=flS54evcKFgFMM&vet=12ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ..i&docid=w_edFuvJNI2ApM&w=5408&h=3605&itg=1&q=free%20house%20pictures&ved=2ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ',
        checkinTime: new Date('11-Decemenber-2022'),
        checkOutTime: new Date('11-Decemenber-2022'),
      },
    ];
  }

  ngDoCheck(): void {
    console.log('change has started');
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms;
    this.title = 'Hotel Room List';
  }
  selectRoom(room: RoomList) {
    this.roomSelected = room;
  }

  addRoom() {
    const room: RoomList = {
      roomType: 'Kings room',
      amenities: 'Air-Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 450000,
      photos:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F106399%2Fpexels-photo-106399.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fhouse%2F&tbnid=flS54evcKFgFMM&vet=12ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ..i&docid=w_edFuvJNI2ApM&w=5408&h=3605&itg=1&q=free%20house%20pictures&ved=2ahUKEwikxdTAjOz7AhX3gc4BHY9XC3kQMygAegUIARDDAQ',
      checkinTime: new Date('11-Decemenber-2022'),
      checkOutTime: new Date('12-Decemenber-2022'),
    };
    this.roomList = [...this.roomList, room];
  }
}
