import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer-component/footer-component';
import {MainHeader} from './components/main-header/main-header';
import {OptionsComponent} from './pages/home-page/inner-item/options-component/options-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MainHeader, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotel-client');
}
