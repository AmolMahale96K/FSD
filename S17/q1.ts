<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M.Sc (CS) Sem-II Syllabus</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-route.min.js"></script>
  <link rel="stylesheet" href="styles.css">
</head>
<body ng-app="msccSyllabusApp">
  <div>
    <h1>M.Sc (CS) Semester II Syllabus</h1>
    <nav>
      <ul>
        <li><a href="#/subject1">Subject 1</a></li>
        <li><a href="#/subject2">Subject 2</a></li>
        <li><a href="#/subject3">Subject 3</a></li>
      </ul>
    </nav>

    <div ng-view></div>
  </div>

  <script src="app.component.ts"></script>
</body>
</html>



import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component for Subject 1
@Component({
  selector: 'subject1',
  template: `
    <h2>Subject 1: Advanced Data Structures</h2>
    <ul>
      <li>Introduction to Data Structures</li>
      <li>Graphs and Trees</li>
      <li>Sorting Algorithms</li>
      <li>Dynamic Programming</li>
      <li>Applications of Data Structures</li>
    </ul>
  `
})
export class Subject1Component {}

// Component for Subject 2
@Component({
  selector: 'subject2',
  template: `
    <h2>Subject 2: Database Management Systems</h2>
    <ul>
      <li>Introduction to Databases</li>
      <li>Relational Models</li>
      <li>Normalization and ER Models</li>
      <li>SQL Queries</li>
      <li>Transaction Management</li>
    </ul>
  `
})
export class Subject2Component {}

// Component for Subject 3
@Component({
  selector: 'subject3',
  template: `
    <h2>Subject 3: Software Engineering</h2>
    <ul>
      <li>Software Development Life Cycle</li>
      <li>Requirements Engineering</li>
      <li>System Design and Architecture</li>
      <li>Software Testing</li>
      <li>Project Management</li>
    </ul>
  `
})
export class Subject3Component {}

// Main App component
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>M.Sc (CS) Semester II Syllabus</h1>
      <nav>
        <ul>
          <li><a [routerLink]="['/subject1']">Subject 1</a></li>
          <li><a [routerLink]="['/subject2']">Subject 2</a></li>
          <li><a [routerLink]="['/subject3']">Subject 3</a></li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}

// App routing module
const routes: Routes = [
  { path: 'subject1', component: Subject1Component },
  { path: 'subject2', component: Subject2Component },
  { path: 'subject3', component: Subject3Component },
  { path: '', redirectTo: '/subject1', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, Subject1Component, Subject2Component, Subject3Component],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
