import { Component } from '@angular/core';
import {Location} from './../location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  location: Location = {

    name: 'Fargo',
    description: 'address',
    openComputers: 8,
    imageLink: ''
  };

}
