import { Component, Input } from '@angular/core';
import {pcFargo} from '../../model.ts/pcFargo';
import {pcMoorhead} from '../../model.ts/pcMoorhead';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {
  

  // selectedLocation: Location;
  // location: Location;
  // constructor(location: boolean){

  // }
  // @Input() location: boolean;

  pcFargoList: pcFargo[] = [
    {
      id: 0, location: 'Fargo', ram: '16 GB', gpu: 'AMD Radeon RX 6600', processor: 'AMD Ryzen 5 5500'
    },
    {
      id: 1, location: 'Fargo', ram: '8 GB', gpu: 'GeForce 1660 Super', processor: 'Intel Core i9'
    },
    {
      id: 2, location: 'Fargo', ram: '12 GB', gpu: 'Nvidia Titan RTX', processor: 'AMD Ryzen 7 5700'
    },
    {
      id: 3, location: 'Fargo', ram: '16 GB', gpu: 'GeForce RTX 4070', processor: 'Intel Core i3'
    },
    {
      id: 4, location: 'Fargo', ram: '12 GB', gpu: 'GeForce 1660 Super', processor: 'AMD Ryzen 5 5500'
    }
  ];

  pcMoorheadList: pcMoorhead[] = [
    {
      id: 0, location: 'Moorhead', ram: '12 GB', gpu: 'AMD Radeon RX 6600', processor: 'AMD Ryzen 5 5500'
    },
    {
      id: 1, location: 'Moorhead', ram: '16 GB', gpu: 'GeForce 1660 Super', processor: 'Intel Core i9'
    },
    {
      id: 2, location: 'Moorhead', ram: '8 GB', gpu: 'Nvidia Titan RTX', processor: 'AMD Ryzen 7 5700'
    },
    {
      id: 3, location: 'Moorhead', ram: '16 GB', gpu: 'GeForce RTX 4070', processor: 'Intel Core i3'
    },
    {
      id: 4, location: 'Moorhead', ram: '16 GB', gpu: 'GeForce 1660 Super', processor: 'AMD Ryzen 5 5500'
    }
  ];

  fargoCount: number = 5;
  moorheadCount: number = 5;

  //  selectLocation: boolean { //used to decide which page to display fargo or moorhead
  //     if(locationNum == 0){
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //  }


  removeFargo(idRemove : number) : void {   //remove pc from display and decrease count
    this.pcFargoList.forEach((element,index)=>{
      if(element.id==idRemove) this.pcFargoList.splice(index,1);
   });
    this.fargoCount--;
  }

  removeMoorhead(idRemove : number) : void {   //remove pc from display and decrease count
    this.pcMoorheadList.forEach((element,index)=>{
      if(element.id==idRemove) this.pcMoorheadList.splice(index,1);
   });
    this.moorheadCount--;
  }
}

