import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  user = {
    name: '',
    mobile: '',
    pin: '',
    email: ''
  };
  submitted = false;

  submitForm() {
    if (this.user.name && this.user.mobile && this.user.pin && this.user.email) {
      this.submitted = true;
    } else {
      this.submitted = false;
    }
  }
}


<div class="container">
  <h2>Student Registration Form</h2>

  <form #registrationForm="ngForm" (ngSubmit)="submitForm()">

    <!-- Name Field -->
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" [(ngModel)]="user.name" name="name" required pattern="[A-Za-z\s]+" />
      <div *ngIf="registrationForm.controls.name?.invalid && registrationForm.controls.name?.touched">
        <small class="error">Name should contain characters only</small>
      </div>
    </div>

    <!-- Mobile Number Field -->
    <div>
      <label for="mobile">Mobile Number:</label>
      <input type="text" id="mobile" [(ngModel)]="user.mobile" name="mobile" required pattern="[0-9]{10}" />
      <div *ngIf="registrationForm.controls.mobile?.invalid && registrationForm.controls.mobile?.touched">
        <small class="error">Mobile number should be 10 digits</small>
      </div>
    </div>

    <!-- Pin Code Field -->
    <div>
      <label for="pin">Pin Code:</label>
      <input type="text" id="pin" [(ngModel)]="user.pin" name="pin" required pattern="[0-9]{6}" />
      <div *ngIf="registrationForm.controls.pin?.invalid && registrationForm.controls.pin?.touched">
        <small class="error">Pin code should be 6 digits</small>
      </div>
    </div>

    <!-- Email Field -->
    <div>
      <label for="email">Email Address:</label>
      <input type="email" id="email" [(ngModel)]="user.email" name="email" required />
      <div *ngIf="registrationForm.controls.email?.invalid && registrationForm.controls.email?.touched">
        <small class="error">Please enter a valid email</small>
      </div>
    </div>

    <!-- Submit Button -->
    <button type="submit" [disabled]="registrationForm.invalid">Submit</button>
  </form>

  <!-- Display Submitted Data -->
  <div *ngIf="submitted">
    <h3>Form Submitted</h3>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Mobile Number:</strong> {{ user.mobile }}</p>
    <p><strong>Pin Code:</strong> {{ user.pin }}</p>
    <p><strong>Email Address:</strong> {{ user.email }}</p>
  </div>
</div>



.container {
    margin: 0 auto;
    padding: 20px;
    max-width: 500px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
  
  small {
    color: red;
  }
  