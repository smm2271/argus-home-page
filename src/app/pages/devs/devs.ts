import { Component } from '@angular/core';
import { devs } from './devs_list';

@Component({
  selector: 'app-devs',
  imports: [],
  templateUrl: './devs.html',
  styleUrl: './devs.scss',
})
export class Devs {
  devs = devs;
}
