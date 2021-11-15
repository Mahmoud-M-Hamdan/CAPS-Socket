'use strict'

const io = require('socket.io-client');
const payload = require('./payload')
/* ------ CONNECT ---------- */
const host = 'http://localhost:3000';
const capsConnection = io.connect(`${host}/caps`);

/* ------ Listener ---------- */
capsConnection.emit("pickup", payload);


capsConnection.on("delivered", (payload) => {
  setTimeout(() => {
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
  }, 2000);
});



