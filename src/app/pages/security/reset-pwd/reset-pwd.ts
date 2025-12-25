import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-reset-pwd',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './reset-pwd.html',
  styleUrl: './reset-pwd.scss',
})
export class ResetPwd {

}
