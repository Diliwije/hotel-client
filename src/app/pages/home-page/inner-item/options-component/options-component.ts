import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel, MatTabsModule} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';
import {StayesContextComponent} from '../stayes-context-component/stayes-context-component';

@Component({
  selector: 'app-options-component',
  imports: [
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatIcon,
    MatTabsModule,
    StayesContextComponent
  ],
  templateUrl: './options-component.html',
  styleUrl: './options-component.scss',
})
export class OptionsComponent {

}
