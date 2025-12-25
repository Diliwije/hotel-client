import {Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {form} from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    MatFormField,

  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
  export class Register {

  protected readonly form = form;
}
