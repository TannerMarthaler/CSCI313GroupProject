import { Component } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import nextWednesday from 'date-fns/nextWednesday';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  sendDate: Date = new Date();
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  sendEvents!: CalendarEvent[];
  
  setView(view: CalendarView) {
    this.view = view;
  }


  
  events: CalendarEvent[] = [
    {
      start: (new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    },
    {
      start: (new Date("2023-04-13T15:30:00")),
      end: (new Date("2023-04-13T17:30:00")),
      title: 'test',
    }
  ]


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    this.sendDate = date;
    this.sendEvents = events;
    //let x=this.adminService.dateFormat(date);
    //this.openAppointmentList(x);
  }
}
