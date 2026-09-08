import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ContainerComponent } from "./container/container.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, NgSwitch, NgSwitchCase, NgSwitchDefault, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';

  // role = 'Admin'

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef

  // ngAfterViewInit(){
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms = 50;
  // }
  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
  this.name.nativeElement.innerText = "Hilton Hotel"
  }
}
