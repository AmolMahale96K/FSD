const EventEmitter = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Define a callback function for the "greet" event
eventEmitter.on('greet', (name) => {
    console.log(Hello, ${name}! Welcome to the event-driven application.);
});

// Define a callback function for the "exit" event
eventEmitter.on('exit', () => {
    console.log('Goodbye! Exiting the application.');
    process.exit(); // Terminates the application
});

// Simulate event triggering in a loop
console.log("Application is running...");

// Simulate events occurring at different intervals
setTimeout(() => eventEmitter.emit('greet', 'Alice'), 2000); // After 2 seconds
setTimeout(() => eventEmitter.emit('greet', 'Bob'), 4000);   // After 4 seconds
setTimeout(() => eventEmitter.emit('exit'), 6000);          // After 6 seconds
