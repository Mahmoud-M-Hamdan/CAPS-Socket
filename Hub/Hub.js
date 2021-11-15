'use strict';

const PORT = process.env.PORT || 3000;
const hub = require('socket.io')(PORT);
const capsSystem = hub.of("/caps");


const pickup = require("../Vendor/pickup");
const inTransit = require("../Driver/inTransit");
const delivered = require("../Driver/delivered");


capsSystem.on("connection", (socket) => {
    console.log("CAPS SYSTEM CONNECTING", socket.id);

    socket.on("pickup", (payload) => {
        pickup(payload);
       
        capsSystem.emit("pickup", payload);
    });

    socket.on("in-transit", (payload) => {
        inTransit(payload);
       
    });

    socket.on("delivered", (payload) => {
        delivered(payload);
        capsSystem.emit("delivered", payload);
    });
});