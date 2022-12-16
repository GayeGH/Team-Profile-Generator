const Engineer = require('../lib/Engineer');

describe("Employee", () => {
    describe("getGithub()", () => {
        it("should return the github name", () => {
            const github = 'wowser';
            const wowser = new Engineer('John', 33, 'johngmail.com', github);

            expect(wowser.getGithub()).toEqual(github);
        });
    })

    describe("Engineer.Type()", () => {
        it("should return 'engineer' ", () => {
            const name = 'John';
            const John = new Engineer(name, 33, 'johngmail.com', 'wowser');

            expect(John.getType()).toEqual('Engineer');
        });
    })
});   