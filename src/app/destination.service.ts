import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: string[] = [];

  getDestinations() {
    return this.destinations;
  }

  addDestination(destination: string) {
    this.destinations.push(destination);
  }

  updateDestinations(newDestinations: string[]) {
    this.destinations = newDestinations;
  }
}
