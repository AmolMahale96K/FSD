<!DOCTYPE html>
<html lang="en" ng-app="studentApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Details Table</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20px;
        }
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body ng-controller="StudentController">

    <h2>Student Details</h2>
    <table>
        <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Grade</th>
        </tr>
        <tr ng-repeat="student in students">
            <td>{{ student.rollNo }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.course }}</td>
            <td>{{ student.grade }}</td>
        </tr>
    </table>

    <script>
        var app = angular.module('studentApp', []);

        app.controller('StudentController', function ($scope) {
            // Array of student objects
            $scope.students = [
                { rollNo: 1, name: "Alice", age: 20, course: "Computer Science", grade: "A" },
                { rollNo: 2, name: "Bob", age: 21, course: "Mathematics", grade: "B" },
                { rollNo: 3, name: "Charlie", age: 22, course: "Physics", grade: "A" },
                { rollNo: 4, name: "David", age: 23, course: "Chemistry", grade: "C" },
                { rollNo: 5, name: "Eve", age: 20, course: "Biology", grade: "A" },
                { rollNo: 6, name: "Frank", age: 21, course: "Statistics", grade: "B" },
                { rollNo: 7, name: "Grace", age: 22, course: "Economics", grade: "A" },
                { rollNo: 8, name: "Hannah", age: 23, course: "English", grade: "C" },
                { rollNo: 9, name: "Ivy", age: 20, course: "History", grade: "B" },
                { rollNo: 10, name: "Jack", age: 21, course: "Philosophy", grade: "A" }
            ];
        });
    </script>

</body>
</html>
