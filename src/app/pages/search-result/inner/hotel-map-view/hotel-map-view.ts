import {AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {GoogleMap, MapAdvancedMarker, MapMarker} from '@angular/google-maps';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-hotel-map-view',
  imports: [
    GoogleMap,
    MapMarker,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose,
    MatButton,
    NgForOf
  ],
  templateUrl: './hotel-map-view.html',
  styleUrl: './hotel-map-view.scss',
})
export class HotelMapView   {

  zoom = 10;
  center = { lat: 6.6979, lng: 79.9129 };

  locations = [
    { latitude: 6.9271, longitude: 79.8441, title: 'Galle Face Hotel' },
    { latitude: 6.9278, longitude: 79.8561, title: 'Shangri-La Colombo' },
    { latitude: 6.9305, longitude: 79.8436, title: 'The Kingsbury Colombo' },
    { latitude: 6.9222, longitude: 79.8565, title: 'Cinnamon Grand Colombo' },
    { latitude: 6.9361, longitude: 79.8478, title: 'Mövenpick Hotel Colombo' },
    { latitude: 6.9150, longitude: 79.8517, title: 'Cinnamon Lakeside Colombo' },
    { latitude: 6.9331, longitude: 79.8440, title: 'Hilton Colombo' },
    { latitude: 6.9275, longitude: 79.8477, title: 'Taj Samudra Colombo' },
    { latitude: 6.9368, longitude: 79.8532, title: 'Mandarina Colombo' },
    { latitude: 6.9279, longitude: 79.8620, title: 'Galadari Hotel' },
    { latitude: 6.9336, longitude: 79.8521, title: 'Jetwing Colombo Seven' },
    { latitude: 6.9324, longitude: 79.8449, title: 'Zest Metropole Colombo' },
    { latitude: 6.9401, longitude: 79.8537, title: 'City Hotel Colombo 02' },
    { latitude: 6.9353, longitude: 79.8539, title: 'Ocean Edge Suites Colombo' },
    { latitude: 6.9226, longitude: 79.8492, title: 'Lake Lodge Colombo' },
    { latitude: 6.9392, longitude: 79.8574, title: 'Hotel Sapphire Colombo' },
    { latitude: 6.9335, longitude: 79.8611, title: 'Renuka City Hotel' },
    { latitude: 6.9272, longitude: 79.8448, title: 'C 1 Colombo Fort' },
    { latitude: 6.9266, longitude: 79.8504, title: 'City Beds – The Regent' },
    { latitude: 6.9385, longitude: 79.8543, title: 'Colombo Court Hotel & Spa' }
  ];



}
