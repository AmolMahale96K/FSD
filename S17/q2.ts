<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Details</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js"></script>
  <script src="app.component.js"></script>
</head>
<body ng-app="studentApp">

  <h1>Student Details</h1>

  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="student in students">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.grade }}</td>
      </tr>
    </tbody>
  </table>

</body>
</html>



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = [
    { id: 1, name: "John Doe", age: 20, grade: "A" },
    { id: 2, name: "Jane Smith", age: 22, grade: "B" },
    { id: 3, name: "Robert Brown", age: 21, grade: "A" },
    { id: 4, name: "Emily Davis", age: 23, grade: "C" },
    { id: 5, name: "Michael Johnson", age: 24, grade: "B" },
    { id: 6, name: "Jessica Wilson", age: 20, grade: "A" },
    { id: 7, name: "David Moore", age: 22, grade: "B" },
    { id: 8, name: "Sarah Taylor", age: 21, grade: "A" },
    { id: 9, name: "James Anderson", age: 23, grade: "C" },
    { id: 10, name: "Mary Thomas", age: 24, grade: "B" }
  ];
}
