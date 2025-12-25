import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-hotel-map-view',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose,
    MatButton
  ],
  templateUrl: './hotel-map-view.html',
  styleUrl: './hotel-map-view.scss',
})
export class HotelMapView {

  @Input() location: {latitude: number, longitude: number,title?: string}[]=[
    {
      latitude: 6.6979,
      longitude: 79.9129,
      title: 'Sri Lanka Office'
    }
  ]

  @ViewChild('mapContainer',{static: false}) gmap!:ElementRef;
  map!:any;
}
