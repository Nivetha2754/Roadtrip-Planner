import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit{
  destinations: string[]=[];
  constructor(private destinationService:DestinationService){}

  ngOnInit() {
    this.destinations=this.destinationService.getDestinations();
  }
  }


