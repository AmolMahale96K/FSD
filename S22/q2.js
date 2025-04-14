const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define a callback function that will be triggered by the event
function onUserRegister(username) {
  console.log(`${username} has registered successfully!`);
}

// Define another callback function for a different event
function onUserLogin(username) {
  console.log(`${username} has logged in.`);
}

// Main loop to listen for events
function mainLoop() {
  console.log("Event-driven application running...");

  // Listen for 'userRegistered' event
  eventEmitter.on('userRegistered', onUserRegister);

  // Listen for 'userLoggedIn' event
  eventEmitter.on('userLoggedIn', onUserLogin);

  // Trigger events
  setTimeout(() => {
    eventEmitter.emit('userRegistered', 'JohnDoe'); // Simulate user registration
  }, 1000);

  setTimeout(() => {
    eventEmitter.emit('userLoggedIn', 'JohnDoe'); // Simulate user login
  }, 2000);
}

// Run the main loop
mainLoop();
