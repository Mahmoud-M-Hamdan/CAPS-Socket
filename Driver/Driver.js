'use strict'

const io = require('socket.io-client');
/* ------ CONNECT ---------- */
const host = 'http://localhost:3000';
const capsConnection = io.connect(`${host}/caps`);

/* ------ Listener ---------- */


capsConnection.on('pickup', payload => {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderID}`);
        capsConnection.emit('in-transit', payload);
    }, 3000);
    setTimeout(() => {
        console.log(`DRIVER: delivered ${payload.orderID}`);
        capsConnection.emit('delivered', payload);
    }, 4000);
});