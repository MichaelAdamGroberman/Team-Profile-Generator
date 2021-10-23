// The current values in this test will result in a PASS

const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
  const testValue = "Columbia University: BCS";
  const emp = new Intern("Michael", 1, "michael@groberman.tech", testValue);
  expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
  const testValue = "Intern";
  const emp = new Intern(
    "Michael",
    1,
    "michael@groberman.tech",
    "Columbia University: BCS"
  );
  expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
  const testValue = "Columbia University: BCS";
  const emp = new Intern("Michael", 1, "michael@groberman.tech", testValue);
  expect(emp.getSchool()).toBe(testValue);
});
