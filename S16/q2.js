const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Event listener function
const eventListener = (eventName) => {
  console.log(`Event "${eventName}" has been triggered!`);
};

// Main loop function that listens for events
const mainLoop = () => {
  // Listening for the event 'start'
  eventEmitter.on('start', () => {
    console.log('Start event detected!');
  });

  // Listening for the event 'stop'
  eventEmitter.on('stop', () => {
    console.log('Stop event detected!');
  });

  // Listening for the event 'pause'
  eventEmitter.on('pause', () => {
    console.log('Pause event detected!');
  });

  // Triggering the events at intervals (simulate the main loop)
  setInterval(() => {
    console.log('Main loop running...');
    // Triggering events at random intervals for demonstration
    const events = ['start', 'stop', 'pause'];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    
    eventEmitter.emit(randomEvent);
  }, 3000); // Event triggered every 3 seconds
};

// Start the main loop
mainLoop();
