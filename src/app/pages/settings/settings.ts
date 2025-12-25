import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {ProfileSetting} from './inner/profile-setting/profile-setting';
import {History} from './inner/history/history';

@Component({
  selector: 'app-settings',
  imports: [
    MatTabGroup,
    MatTab,
    ProfileSetting,
    History
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {

}
