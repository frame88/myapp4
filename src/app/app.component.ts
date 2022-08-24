import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <!-- stampa titolo -->
  <h1 class="ci">ciao</h1>

  <!-- stampa console log -->
  <input type="area"(click)="clickHandler()">

  <!-- stamap di un array -->
  <li
    *ngFor="let user of users">
    {{user}}
  </li>
  `
})
export class AppComponent {
  clickHandler() {
    console.log('ciao');
  }
  
  users = ['Mario', 'Cosimo','Fabio'];

}
