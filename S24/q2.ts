<div class="container">
  <h1>Username and Password Validation</h1>
  <form (ngSubmit)="validateUser()">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" [(ngModel)]="username" name="username" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" [(ngModel)]="password" name="password" required />
    </div>
    <button type="submit">Validate</button>
  </form>
</div>

<div *ngIf="username && passwordValid !== null">
  <p *ngIf="username && usernameValid !== null">
    <strong>{{ usernameValid }}</strong>
  </p>
  <p *ngIf="password && passwordValid !== null">
    <strong>{{ passwordValid }}</strong>
  </p>
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
  usernameValid: string | null = null;
  passwordValid: string | null = null;

  validateUser(): void {
    this.usernameValid = null;
    this.passwordValid = null;

    // Username validation
    if (this.username.trim() === '') {
      this.usernameValid = 'Enter username';
    } else if (this.username.length < 3) {
      this.usernameValid = 'Username is too short';
    } else {
      this.usernameValid = 'Valid username';
    }

    // Password validation
    if (this.password.length < 8) {
      this.passwordValid = 'Password must be at least 8 characters';
    } else {
      this.passwordValid = 'Valid password';
    }
  }
}
