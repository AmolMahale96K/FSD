// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Event listener function 1
function onUserLogin() {
    console.log('User logged in successfully!');
}

// Event listener function 2
function onFileUploaded() {
    console.log('File uploaded successfully!');
}

// Main event loop to listen for specific events and trigger the corresponding callback
function mainLoop() {
    console.log('Starting event loop...');

    // Emitting the 'userLogin' event
    eventEmitter.emit('userLogin');
    
    // Emitting the 'fileUpload' event
    eventEmitter.emit('fileUpload');
}

// Register event listeners
eventEmitter.on('userLogin', onUserLogin);  // When 'userLogin' event is triggered, call onUserLogin
eventEmitter.on('fileUpload', onFileUploaded);  // When 'fileUpload' event is triggered, call onFileUploaded

// Run the main event loop
mainLoop();
