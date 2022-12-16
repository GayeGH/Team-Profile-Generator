const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officenumber){
        

        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officenumber = officenumber;
        this.type = 'Manager';
    }
    getOfficenumber() {
        return this.officenumber;

    }
    getType() {
        return "Manager";
    }
};

//const boss = new Manager('Don', 33, 'dongmail.com', 'callme');
//console.log(boss.getOfficenumber())

module.exports = Manager;