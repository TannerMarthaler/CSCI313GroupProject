import { Component, Input } from '@angular/core';
import {pcFargo} from '../../model.ts/pcFargo';
import {pcMoorhead} from '../../model.ts/pcMoorhead';
import { LocationComponent } from '../location/location.component';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {
  

  selectedLocation: string = '';
  fargoList: pcFargo[] = [];
  moorheadList: pcMoorhead[] = [];
  fargoCount: number = 0;
  moorheadCount: number = 0;

  constructor( private locationService : LocationService ) {}

  // ngOnInit(){
  //   this.selectedLocation = this.locationService.getLocationSearch();
  //   console.log(this.selectedLocation);
  // }

  fargoList: pcFargo[] = [];
  moorheadList: pcMoorhead[] = [];
  fargoCount: number = 0;
  moorheadCount: number = 0;

  ngOnInit() {
    this.fargoList = this.locationService.getFargoItems();
    this.moorheadList = this.locationService.getMoorheadItems();
    this.selectedLocation = this.locationService.getLocationSearch();
    this.fargoCount = this.fargoList.length;
    this.moorheadCount = this.moorheadList.length;
  }


  removeFargo(idRemove : number, id : number) : void {   //remove pc from display and decrease count
    this.fargoList.forEach((element,index)=>{
      if(element.id==idRemove) this.fargoList.splice(index,1);
   });
    this.fargoCount--;
    this.locationService.decrementComputer(id);
  }

  removeMoorhead(idRemove : number, id : number) : void {   //remove pc from display and decrease count
    this.moorheadList.forEach((element,index)=>{
      if(element.id==idRemove) this.moorheadList.splice(index,1);
   });
    this.moorheadCount--;
    this.locationService.decrementComputer(id);
  }
}

