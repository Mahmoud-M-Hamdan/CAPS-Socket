"use strict";

function pickup(payload) {
  // daclare new date
  let date = new Date();

  // declare pick up event object
  let pickupEvent = {
    event: "pickup",
    time: `${date.getDate()}/Novmber`,
    payload: payload,
  };
  console.log("EVENT", pickupEvent);

}

module.exports = pickup;