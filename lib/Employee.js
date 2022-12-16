class Employee {
    constructor (name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
        this.type = 'Employee';
    }
    getName() {
        return this.name
    
    }
    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getType() {
        return this.type;
    }
};
//const john = new Employee('John', 33, 'johngmail.com');
//console.log(john.getName())

module.exports = Employee;

