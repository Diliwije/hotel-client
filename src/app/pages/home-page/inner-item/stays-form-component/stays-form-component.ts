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
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-stays-form-component',
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
    MatMenuTrigger,
    RouterLink

  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss',
})
export class StaysFormComponent {

}
