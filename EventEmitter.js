const EventEmitter = require('events');

// Create EventEmitter Object
const event = new EventEmitter();

// Create Event Listener
event.on('greet', () => {
    console.log("Hello User!");
});

// Emit Event
event.emit('greet');