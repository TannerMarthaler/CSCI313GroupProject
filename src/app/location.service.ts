import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  location = [
    {
      name: 'Fargo',
      description: 'address',
      openComputers: 8,
      imageLink: 'assets/pictures/FargoWatertower.jpg'
    },

    {
      name: 'Moorhead',
      description: 'address',
      openComputers: 4,
      imageLink: 'assets/pictures/MoorheadWatertower.jfif'
    }
  ];
}