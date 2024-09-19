import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  destinations:string[]=[];

  addDestination(destination:string){
    this.destinations.push(destination)
  }
  getDestinations(){
    return this.destinations;
  }

  constructor() { }
}
