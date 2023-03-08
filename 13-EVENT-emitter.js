const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//NOTE ORDER MATTERS
//listen first
//EMIT then

// response is name of event. once event takes place then call back is invoked
//listening to event
customEmitter.on("response", () => {
  console.log(`1. data received`);
});

// 1. more than one call back can be initiated by event
customEmitter.on("response", () => {
  console.log(`2. can have many methods that respond to event`);
});

// can pass in arguments in callback - name and id
customEmitter.on("response", (name, id) => {
  console.log(
    `3. can also have arguments passed in form event like ${name} with ${id}`
  );
});
// emiting event with parameters
customEmitter.emit("response", "john", 34);
