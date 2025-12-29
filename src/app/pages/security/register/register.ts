import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router, RouterLink} from "@angular/router";
import {Auth} from '../../../services/auth';
import {CookieManager} from '../../../services/cookie-manager';

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
    MatFormField
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit  {
loading: boolean = false;


  constructor(private authService: Auth, private router: Router, private cookieManager: CookieManager) {
  }

  ngOnInit(): void {
setTimeout(()=>{
this.cookieManager.clearAll();
})
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
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2), // Adjust as needed
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2), // Adjust as needed
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    contact: new FormControl('',
      [Validators.required, Validators.minLength(10)]),
  });



  createUser(){
    this.loading = true;
    this.authService.register(
      this.form.value.email?.trim(),
      this.form.value.password?.trim(),
      this.form.value.firstName?.trim(),
      this.form.value.lastName?.trim(),
      this.form.value.contact?.trim()
    ).subscribe(resp=>{
      this.loading = false;
      console.log("hello");
    this.router.navigateByUrl('/security/register-verification/'+this.form.value.email?.trim());
    alert('User created successfully');
    },error=>{
      this.loading = false;
    })
  }

}
