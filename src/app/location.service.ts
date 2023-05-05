import { Injectable } from '@angular/core';
import { pcFargo } from 'src/model.ts/pcFargo';
import { pcMoorhead } from 'src/model.ts/pcMoorhead';
import { pcFargoList } from './location-database';
import { pcMoorheadList } from './location-database';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  searchName : string = '';

  fargoPc : pcFargo[] = pcFargoList;
  moorheadPc : pcMoorhead[] = pcMoorheadList;

  getFargoItems() : pcFargo[]{
    return pcFargoList;
  }

  getMoorheadItems() : pcMoorhead[]{
    return pcMoorheadList;
  }

  location = [
    {
      id: 0,
      name: 'Fargo',
      description: 'address',
      openComputers: 8,
      imageLink: 'assets/pictures/FargoWatertower.jpg'
    },

    {
      id: 1,
      name: 'Moorhead',
      description: 'address',
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
