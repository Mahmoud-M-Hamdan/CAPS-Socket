'use strict'

const faker = require("faker");


let payload = {
    store: faker.company.companyName(),
    orderId:  faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
};


exports.module=payload

