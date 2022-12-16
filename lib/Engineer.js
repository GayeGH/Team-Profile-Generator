const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        

        super(name, id, email)

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.type = 'Engineer';
    }
    getGithub() {
        return this.github;

    }
    getType() {
        return "Engineer";
    }
};

//const newguy= new Engineer('John', 33, 'johngmail.com', 'wowser');
//console.log(newguy.getGithub())

module.exports = Engineer;