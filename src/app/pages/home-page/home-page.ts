import { Component } from '@angular/core';
import {MainHeader} from './inner-item/main-header/main-header';
import {OptionsComponent} from './inner-item/options-component/options-component';
import {FooterComponent} from '../../components/footer-component/footer-component';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader,
    OptionsComponent,

  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
