import { Component } from '@angular/core';
import { User } from './model/user'

@Component({
  selector: 'app-root',
  template: `
    <button class="male" (click)="goto('uno')">Uno</button>
    <button class="female" (click)="goto('due')">Due</button>
    <button class="ghei" (click)="goto('tre')">Tre</button>
    <hr>

  <div [ngSwitch]="section">
    <div *ngSwitchCase="'uno'">
      Decidi tu:
      <button (click)="goto('due')">Next</button>
    </div>

    <div *ngSwitchCase="'due'">
      <input type="text">
      <button (click)="goto('tre')">Next</button>
    </div>

    <div *ngSwitchDefault>
      Bhocc
    </div>
  </div>

  <li *ngFor="let user of users">{{user.name}}</li>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section: string = '';
  users: User[] = [];
  
  goto(str: string) {
    this.section = str;

     this.users = [
      {id: 1, name: 'Fabio', gender: 'M'},
      {id: 2, name: 'Giovanni', gender: 'M'},
      {id: 3, name: 'Luca', gender: 'M'},
      {id: 4, name: 'Erika', gender: 'F'}
    ];
  }
}
