import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {
  destination!: string;

  constructor(private destinationService: DestinationService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.destinationService.addDestination(this.destination);
      this.destination = ''; // Reset input
      form.resetForm(); // Reset form state
    }
  }
}
