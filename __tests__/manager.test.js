const Manager = require('../lib/Manager');

describe("Employee", () => {
    describe("getOfficenumber()", () => {
        it("should return the officenumber", () => {
            const officenumber = 'callme';
            const callme = new Manager('Don', 33, 'dongmail.com', officenumber);

            expect(callme.getOfficenumber()).toEqual(officenumber);
        });
    })
    describe("Manager.Type()", () => {
        it("should return 'manager'", () => {
            const name = 'Don';
            const Don = new Manager (name, 33, 'dongmail.com', 'callme');

            expect(Don.getType()).toEqual('Manager');
        });
    })
});
