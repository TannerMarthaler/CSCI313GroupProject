import { Component, Input } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { isSameDay } from 'date-fns';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  @Input() receiveDate!: Date;
  @Input() receiveEvents!: CalendarEvent[];

  eventsForDate!: CalendarEvent[];

  ngOnChanges(): void {
    this.eventsForDate = this.receiveEvents.filter((event: CalendarEvent) => {
      return isSameDay(event.start, this.receiveDate);
    });
}
}
