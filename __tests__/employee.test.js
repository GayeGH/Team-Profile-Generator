const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName()", () => {
        it("should return the employee name", () => {
            const name = 'John';
            const John = new Employee(name, 33, 'johngmail.com');

            expect(John.getName()).toEqual(name);
        });
    })

    describe("getID()", () => {
        it("should return the employee id", () => {
            const name = 'John';
            const id = 33;
            const John = new Employee(name, id, 'johngmail.com');

            expect(John.getID()).toEqual(id);
        });
    })

    describe("getEmail()", () => {
        it("should return the employee email", () => {
            const name = 'John';
            const email = "johngmail.com";
            const John = new Employee(name, 33, email);

            expect(John.getEmail()).toEqual(email);
        });
    })

    describe("getType()", () => {
        it("should return the employee name", () => {
            const name = 'John';
            const John = new Employee(name, 33, 'johngmail.com');

            expect(John.getType()).toEqual('Employee');
        });
    })
});