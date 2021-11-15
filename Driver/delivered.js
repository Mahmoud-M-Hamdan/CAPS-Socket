"use strict";

function delivered(payload) {
  
    // daclare new date
    let date = new Date();

    // declare delivered event object
    let deliveredEvent = {
        event: "delivered",
        time: `${date.getDate()}/ November`,
        payload: payload,
    };
    console.log("EVENT", deliveredEvent);
}



module.exports = delivered