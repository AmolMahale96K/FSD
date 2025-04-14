import { Component } from '@angular/core';

// Define the structure of a student
interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Array to store student data
  students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 21, grade: 'B' },
    { id: 3, name: 'Bob Johnson', age: 22, grade: 'A' },
    { id: 4, name: 'Alice Brown', age: 23, grade: 'C' },
    { id: 5, name: 'Charlie Davis', age: 24, grade: 'B' },
    { id: 6, name: 'Eve Wilson', age: 20, grade: 'A' },
    { id: 7, name: 'David Taylor', age: 21, grade: 'C' },
    { id: 8, name: 'Grace Thomas', age: 22, grade: 'B' },
    { id: 9, name: 'Helen Clark', age: 23, grade: 'A' },
    { id: 10, name: 'Steve Lee', age: 24, grade: 'C' }
  ];
}



<div class="container">
  <h1>Student Details</h1>

  <!-- Table to display student details -->
  <table border="1">
    <thead>
      <tr>
        <th>Student ID</th>
        <th>Student Name</th>
        <th>Age</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <!-- Use *ngFor to loop through the students array -->
      <tr *ngFor="let student of students">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.grade }}</td>
      </tr>
    </tbody>
  </table>
</div>
