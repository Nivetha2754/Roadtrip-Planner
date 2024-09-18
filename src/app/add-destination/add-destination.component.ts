import { Component } from '@angular/core';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrl: './add-destination.component.css'
})
export class AddDestinationComponent {
  destination: string = '';

  onSubmit(){
    console.log(this.destination);
  }

}
