import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  searchName : string = '';

  location = [
    {
      id: 0,
      name: 'Fargo',
      description: '1551 45th St S, Fargo, ND 58103',
      openComputers: 8,
      imageLink: 'assets/pictures/FargoWatertower.jpg'
    },

    {
      id: 1,
      name: 'Moorhead',
      description: '505 Center Ave, Moorhead, MN 56560',
      openComputers: 4,
      imageLink: 'assets/pictures/MoorheadWatertower.jfif'
    }
  ];

  setLocationSearch(name : string) : void{
    this.searchName = name;
    console.log(this.searchName);
  }

  getLocationSearch() : string{
    console.log(this.searchName);
    return this.searchName;
  }

  decrementComputer(id : number) : void{
    this.location[id].openComputers--;
  }
}
