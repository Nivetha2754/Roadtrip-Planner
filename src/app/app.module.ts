import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DestinationListComponent } from './destination-list/destination-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDestinationComponent,
    DestinationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
