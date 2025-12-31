import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Auth} from '../../../services/auth';

@Component({
  selector: 'app-register-verification',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss',
})
export class RegisterVerification implements OnInit {
  //activatedRoute = inject(ActivatedRoute);

  loading = false;
  email: any;

  constructor(private router:Router, private activatedRoute: ActivatedRoute ,private authService:Auth ) {
  }

  form = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  ngOnInit(): void {
    //this.email = this.activatedRoute.snapshot.paramMap.get('email');
    // @ts-ignore
    this.activatedRoute.paramMap.subscribe(resp => {
      this.email = resp.get('email');
    })

  }

  verifyCode(){
    this.loading = true;
    this.authService.verify(

      this.form.value.otp?.trim(),
      this.email,)
      .subscribe(resp=>{
        alert("Verification successful");
      this.router.navigateByUrl('/security/login');
    }, error=>{
      alert("Verification failed");
    })
  }



 /* resend(){
    this.loading = true;
    this.authService.verify(
      this.email,
      this.form.value.otp?.trim())
      .subscribe(resp=>{
        alert("Verification successful");
        this.router.navigateByUrl('/security/login');
      }, error=>{
        alert("Verification failed");
      })
  }*/


}
