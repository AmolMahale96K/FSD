// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Event listener for 'start' event
eventEmitter.on('start', () => {
  console.log('The event loop has started!');
});

// Event listener for 'process' event
eventEmitter.on('process', (data) => {
  console.log('Processing data: ', data);
});

// Event listener for 'end' event
eventEmitter.on('end', () => {
  console.log('The event loop has ended!');
});

// Main event loop
function eventLoop() {
  // Trigger the 'start' event
  eventEmitter.emit('start');

  // Simulate some processing with the 'process' event
  setTimeout(() => {
    eventEmitter.emit('process', { task: 'Task 1', status: 'In Progress' });

    // After some processing, trigger the 'end' event
    setTimeout(() => {
      eventEmitter.emit('end');
    }, 2000); // 2 seconds delay before 'end' event
  }, 1000); // 1 second delay before 'process' event
}

// Call the main event loop
eventLoop();
