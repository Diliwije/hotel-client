import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {email, form} from '@angular/forms/signals';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Auth} from '../../../services/auth';
import {CookieManager} from '../../../services/cookie-manager';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,

    FormsModule,

    MatInput,
    MatButton,
    MatCheckbox,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  showStatus=false;

  loading=false;

  constructor(private router:Router,
              private activatedRoute: ActivatedRoute,
              private cookieService: CookieManager,
              private authService:Auth) {
  }

  form = new FormGroup({
    email: new FormControl('',
      [Validators.email, Validators.required,
        Validators.minLength(3)]),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[@&$])[A-Za-z0-9@&$]{6,}$/),
        Validators.pattern(/^\S*$/)
      ]),
  })

  login() {
    this.loading = true;
    this.authService.login(
      this.form.value.email?.trim(),
      this.form.value.password?.trim()
    ).subscribe(resp => {
      this.loading = false;
      this.cookieService.set(resp?.data?.access_token,'token')
      this.router.navigateByUrl('/settings');
      alert('success!');
    }, error => {
      this.loading = false;
    })
  }

}
