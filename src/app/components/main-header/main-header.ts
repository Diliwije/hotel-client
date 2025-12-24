import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-header',
  imports: [
    MatIcon,
    RouterLink
  ],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader {

}
