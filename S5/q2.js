<div class="container">
  <h2>Angular Username and Password Validation</h2>

  <form #userForm="ngForm" (ngSubmit)="validateForm(userForm)">
    <label for="username">Username:</label><br />
    <input
      type="text"
      id="username"
      name="username"
      [(ngModel)]="username"
      #usernameInput="ngModel"
      required
      minlength="3"
    /><br /><br />

    <label for="password">Password:</label><br />
    <input
      type="password"
      id="password"
      name="password"
      [(ngModel)]="password"
      #passwordInput="ngModel"
      required
      minlength="8"
    /><br /><br />

    <button type="submit" [disabled]="userForm.invalid">Validate</button>
  </form>

  <div *ngIf="message" class="msg">
    <h3>{{ message }}</h3>
  </div>

  <div *ngIf="errorMessage" class="msg">
    <h3 style="color: red;">{{ errorMessage }}</h3>
  </div>
</div>




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  errorMessage: string = '';

  validateForm(form: any): void {
    // Reset messages
    this.message = '';
    this.errorMessage = '';

    if (!this.username) {
      this.errorMessage = 'Enter username';
      return;
    }

    if (this.username.length < 3) {
      this.errorMessage = 'Username is too short';
      return;
    }

    if (!this.password || this.password.length < 8) {
      this.errorMessage = 'Password must be minimum 8 characters';
      return;
    }

    this.message = 'Valid username and password!';
  }
}


