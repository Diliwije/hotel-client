import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatHint, MatLabel} from '@angular/material/input';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-stayes-form-component',
  imports: [
/*
    MatLabel,
    MatFormField,
    MatStartDate,
    MatEndDate,
    MatDateRangeInput,

    MatDatepickerToggle,
    MatDateRangePicker,
*/
    MatFormFieldModule,
    MatDatepickerModule,
    MatIcon,
    MatMenu,
    // MatMenuItem,
    MatMenuTrigger

  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stayes-form-component.html',
  styleUrl: './stayes-form-component.scss',
})
export class StayesFormComponent {

}
