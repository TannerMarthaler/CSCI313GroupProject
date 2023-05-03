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
      start: (new Date("2023-05-01T16:00:00")),
      end: (new Date("2023-05-01T21:30:00")),
      title: "Women's Night",
    },
    {
      start: (new Date("2023-05-02T16:00:00")),
      end: (new Date("2023-05-02T21:30:00")),
      title: "Men's Night",
    },
    {
      start: (new Date("2023-05-13T15:30:00")),
      end: (new Date("2023-05-13T18:30:00")),
      title: 'Music Night',
    },
    {
      start: (new Date("2023-05-11T10:00:00")),
      end: (new Date("2023-05-11T14:30:00")),
      title: 'Milkshake Frenzy',
    },
    {
      start: (new Date("2023-05-13T17:30:00")),
      end: (new Date("2023-05-13T22:00:00")),
      title: 'Smash Ultimate Singles',
    },
    {
      start: (new Date("2023-05-30T15:30:00")),
      end: (new Date("2023-05-30T17:30:00")),
      title: 'Karaoke Night for the Mute',
    },

  ]


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    this.sendDate = date;
    this.sendEvents = events;
    //let x=this.adminService.dateFormat(date);
    //this.openAppointmentList(x);
  }
}
