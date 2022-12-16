const Intern = require('../lib/Intern');

describe("Employee", () => {
    describe("getSchool()", () => {
        it("should return the school name", () => {
            const school = 'UNC';
            const UNC = new Intern('Mary', 44, 'mary@gmail', school );

            expect(UNC.getSchool()).toEqual(school);
        });
    })

    describe("Intern.type()", () => {
        it("should return 'intern'", () => {
            const name = 'Mary';
            const Mary = new Intern(name, 44, 'mary@gmail.com', 'UNC');

            expect(Mary.getType()).toEqual('Intern');
        });
    })
});  