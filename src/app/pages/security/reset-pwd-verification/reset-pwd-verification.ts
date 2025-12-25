import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-reset-pwd-verification',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './reset-pwd-verification.html',
  styleUrl: './reset-pwd-verification.scss',
})
export class ResetPwdVerification {

}
