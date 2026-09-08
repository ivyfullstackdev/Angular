import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel'
  numberOfRooms = 10
  hideRooms = false

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title = 'Room List'

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() {

  }
  ngOnInit(): void {
    this.roomList = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
    price: 500,
    photos: 'https://www.maritim.com/en/hotels/germany/berlin-proarte-hotel/hotel-overview',
    checkinTime: new Date ('11-Nov-2021'),
    checkoutTime: new Date ('12-Nov-2021'),
    rating: 9.5
    },
    {
    roomNumber: 2,
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
    price:1000,
    photos: 'https://www.maritim.com/en/hotels/germany/berlin-proarte-hotel/hotel-overview',
    checkinTime: new Date ('11-Nov-2021'),
    checkoutTime: new Date ('12-Nov-2021'),
    rating: 3.4
    }
  ]
}

ngDoCheck(): void {
  console.log('on changes is called')
}

ngAfterViewInit(): void {
  this.headerComponent.title = "Rooms View"
  this.headerChildrenComponent.last.title = "Last Title"
}

ngAfterViewChecked(): void {
  
}

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = "Rooms List"
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price:650,
      photos: 'https://www.maritim.com/en/hotels/germany/berlin-proarte-hotel/hotel-overview',
      checkinTime: new Date ('11-Nov-2021'),
      checkoutTime: new Date ('12-Nov-2021'),
      rating: 7.5
    }

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}

