<div class="container">
  <h2>User Validation Form</h2>
  <form (ngSubmit)="validateForm()">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" [(ngModel)]="username" name="username" required>
    </div>

    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" [(ngModel)]="password" name="password" required>
    </div>

    <button type="submit">Submit</button>
  </form>

  <p *ngIf="validationMessage">{{ validationMessage }}</p>
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
  validationMessage: string = '';

  // Function to validate username and password
  validateForm() {
    if (!this.username) {
      this.validationMessage = 'Enter username';
      return;
    }

    if (this.username.length < 3) {
      this.validationMessage = 'Username is too short';
      return;
    }

    if (this.password.length < 8) {
      this.validationMessage = 'Password should be at least 8 characters long';
      return;
    }

    // If all validations pass
    this.validationMessage = 'Valid username and password';
  }
}
