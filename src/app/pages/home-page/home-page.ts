import { Component } from '@angular/core';
import {MainHeader} from './inner-item/main-header/main-header';
import {OptionsComponent} from './inner-item/options-component/options-component';
import {FooterComponent} from '../../components/footer-component/footer-component';
import {OffersComponent} from './inner-item/offers-component/offers-component';
import {HomeTrendingDestinations} from './inner-item/home-trending-destinations/home-trending-destinations';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader,
    OptionsComponent,
    OffersComponent,
    HomeTrendingDestinations,

  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
