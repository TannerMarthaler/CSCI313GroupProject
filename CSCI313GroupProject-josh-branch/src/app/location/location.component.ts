import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [LocationService]
})
export class LocationComponent {
  @Output() location: EventEmitter<boolean> = new EventEmitter<boolean>();

  locationList: {name: string, description: string, openComputers: number, imageLink: string}[] = []
  selectedLocation: string = 'Fargo';

  constructor(private locationServices: LocationService){}

  ngOnInit() {  
    this.locationList = this.locationServices.location
  }

  showLocationDetails(name: string): void {
    this.selectedLocation = name;
  }

  whichLocation(): void {
    this.location.emit(!this.location);
  }

    //Need to add login verification
    //isLoggedIn: void {

    //}

}
