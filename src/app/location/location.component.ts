import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {

  locationList: {id: number, name: string, description: string, openComputers: number, imageLink: string}[] = []
  selectedLocation: string = '';

  constructor(private locationServices: LocationService){}

  ngOnInit() {  
    this.locationList = this.locationServices.location
  }

  showLocationDetails(name: string): void {
    this.locationServices.setLocationSearch(name);
    console.log(name);
  }

}