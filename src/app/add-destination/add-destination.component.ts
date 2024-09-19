import { Component } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrl: './add-destination.component.css'
})
export class AddDestinationComponent {
  destination: string = '';

  constructor(private destinationService: DestinationService){}

  onSubmit(){
    this.destinationService.addDestination(this.destination);
    this.destination='';
    console.log(this.destination);
  }

}
