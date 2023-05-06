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
  // location: Location;
  // constructor(location: boolean){

  // }
  // @Input() location: boolean;

  constructor( private locationService : LocationService ) {}

  // ngOnInit(){
  //   this.selectedLocation = this.locationService.getLocationSearch();
  //   console.log(this.selectedLocation);
  // }

  fargoList: pcFargo[] = [];
  moorheadList: pcMoorhead[] = [];

  ngOnInit() {
    this.fargoList = this.locationService.getFargoItems();
    this.moorheadList = this.locationService.getMoorheadItems();
    this.selectedLocation = this.locationService.getLocationSearch();
  }

  fargoCount: number = 8;
  moorheadCount: number = 4;

  //  selectLocation: boolean { //used to decide which page to display fargo or moorhead
  //     if(locationNum == 0){
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //  }


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

