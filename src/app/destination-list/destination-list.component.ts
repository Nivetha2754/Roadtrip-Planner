import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {
  destinations: string[] = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit() {
    this.destinations = this.destinationService.getDestinations();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.destinations, event.previousIndex, event.currentIndex);
    this.destinationService.updateDestinations(this.destinations);
  }
}



