// Employee Class responsible for retreiving and storing employee properties from the database
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.title;
    }
}

// export the module 'Employee' so that is can be used elsewhere by the application
module.exports = Employee