// The current values in this test will result in a PASS
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Set GitHub Account via constructor argument", () => {
  const testValue = "MichaelAdamGroberman";
  const emp = new Engineer("Michael", 1, "michael@groberman.tech", testValue);
  expect(emp.github).toBe(testValue);
});

test("getRole() functions correctly", () => {
  const testValue = "Engineer";
  const emp = new Engineer(
    "Michael",
    1,
    "michael@groberman.tech",
    "MichaelAdamGroberman"
  );
  expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub UN via getGitHub()", () => {
  const testValue = "MichaelAdamGroberman";
  const emp = new Engineer("Michael", 1, "michael@groberman.tech", testValue);
  expect(emp.getGitHub()).toBe(testValue);
});
