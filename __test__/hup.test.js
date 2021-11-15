"use strict";

const faker = require("faker");
const pickup = require("../Vendor/pickup")
const inTransit = require("../Driver/inTransit");
const delivered = require("../Driver/delivered");
describe("test", () => {
  let consoleSpy;
  let payload = {
    store: faker.company.companyName(),
    orderId: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("pick up", async () => {
    await pickup(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("in transit", async () => {
    await inTransit(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("delivered", async () => {
    await delivered(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
});