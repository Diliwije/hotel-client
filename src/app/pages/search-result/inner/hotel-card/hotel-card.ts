import {Component, inject} from '@angular/core';
import {MatTooltip, TooltipPosition} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {HotelMapView} from '../hotel-map-view/hotel-map-view';

@Component({
  selector: 'app-hotel-card',
  imports: [
    MatTooltip,
    MatIcon
  ],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.scss',
})
export class HotelCard {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  dialog=inject(MatDialog)

  protected openModal() {
    this.dialog.open(HotelMapView,{
      width: '1000px',
      height: '500px',
      data:{

      },
      disableClose: true,
    })
  }
}
