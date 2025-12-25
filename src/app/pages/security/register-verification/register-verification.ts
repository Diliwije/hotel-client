import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-verification',
    imports: [
        FormsModule,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        RouterLink
    ],
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss',
})
export class RegisterVerification implements OnInit {
  //activatedRoute = inject(ActivatedRoute);
  email: any;

  constructor( private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.email = this.activatedRoute.snapshot.paramMap.get('email');
    // @ts-ignore
    this.activatedRoute.paramMap().subscribe(resp => {
      this.email = resp.get('email');
    })
  }

}
