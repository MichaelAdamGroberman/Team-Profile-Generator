// The current values in this test will result in a PASS
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Set Office Number via constructor argument", () => {
  const testValue = 2016744074;
  const emp = new Manager("Michael", 1, "michael@groberman.tech", testValue);
  expect(emp.officeNumber).toBe(testValue);
});

test("getRole() functions correctly", () => {
  const testValue = "Manager";
  const emp = new Manager("Michael", 1, "michael@groberman.tech");
  expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number via getOffice()", () => {
  const testValue = 2016744074;
  const emp = new Manager("Michael", 1, "michael@groberman.tech", testValue);
  expect(emp.getOfficeNumber()).toBe(testValue);
});
