"use strict";

function inTransit(payload) {
  // daclare new date
  let date = new Date();

  // declare in transit event object
  let inTRansitEvent = {
    event: "in-transit",
    time: `${date.getDate()}/Novmber`,
    payload: payload,
  };
  console.log("EVENT", inTRansitEvent);
  // events.emit("delivered", payload);
}

module.exports = inTransit;