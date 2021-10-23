const Employee = require("../lib/Employee");

test("New Employee Created", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("Set Employee Name via constructor argument", () => {
  const name = "Michael";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Set ID via constructor argument", () => {
  const testValue = 768941;
  const emp = new Employee("Michael", testValue);
  expect(emp.id).toBe(testValue);
});

test("Set Email via constructor argument", () => {
  const testValue = "michael@groberman.tech";
  const emp = new Employee("Michael", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Get name via getName()", () => {
  const testValue = "Michael";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
  const testValue = 768941;
  const emp = new Employee("Michael", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Get Email via getEmail()", () => {
  const testValue = "michael@groberman.tech";
  const emp = new Employee("Michael", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() functions correctly", () => {
  const testValue = "Employee";
  const emp = new Employee("Michael", 1, "michael@groberman.tech");
  expect(emp.getRole()).toBe(testValue);
});
