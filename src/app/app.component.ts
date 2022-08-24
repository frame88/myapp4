import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="ci">ciao</h1>
  <input (click)="clickHandler()" type=" ">  
  `
})
export class AppComponent {
  clickHandler() {
    console.log('ciao');
  }
}
