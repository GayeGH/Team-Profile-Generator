const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        

        super(name, id, email)

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.type = 'Intern';
    }
    getSchool() {
        return this.school;

    }
    getType() {
        return "Intern";
    }
};
//const Mary = new Intern('Mary', 44, 'mary@gmail', 'UNC' );
//console.log(Mary.getID())
module.exports = Intern;