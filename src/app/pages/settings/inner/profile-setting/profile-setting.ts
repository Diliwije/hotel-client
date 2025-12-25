import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {RouterLink} from "@angular/router";
import {ManageProfilePic} from '../manage-profile-pic/manage-profile-pic';

@Component({
  selector: 'app-profile-setting',
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink,
    ManageProfilePic
  ],
  templateUrl: './profile-setting.html',
  styleUrl: './profile-setting.scss',
})
export class ProfileSetting {

}
