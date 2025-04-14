import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  currentLocation: string;

  constructor() { }

  ngOnInit(): void {
    // Get the current location (URL) of the page
    this.currentLocation = window.location.href; // This will give the full URL
  }

}


<div class="container">
  <h1>Current Web Page Location</h1>
  <p>The current URL of the web page is:</p>
  <p><strong>{{ currentLocation }}</strong></p>
</div>



.container {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  strong {
    color: blue;
  }
  
