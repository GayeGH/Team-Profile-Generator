const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const MemberArr = [];
function init() {
   inquirer 
    .prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What type of employee are you adding?',
            choices: ['Manager', 'Intern', 'Engineer', "I'm Done"]
        }    
    ])
    .then((response) => {
        switch (response.choice) {
            case 'Manager':
                //code block
                createManager();
            break;
            case 'Intern':
                createIntern();
            break;
            case 'Engineer':
                createEngineer();
            break;
            case "I'm Done":
                generateTable();
            break;    

        }

        //const employee = new Employee(response.manager, response.intern, response.engineer);
        //MemberArr.push(employee);
        //console.log(memberArr);
    });
};
    function createManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the manager?',
            },
            {
                type: 'input',
                name: 'officenumber',
                message: 'What is the officenumber of the manager?',
            },

        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officenumber);
            MemberArr.push(manager);
            init();

        })
        
    };

    function createIntern() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the intern?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the intern?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the intern?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the school of the intern?',
            },

        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            MemberArr.push(intern);
            init();
        })
        
    };

        function createEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the engineer?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the engineer?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the github of the engineer?',
            },

        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            MemberArr.push(engineer);
            init();
        })
        
    };

    function generateTable(){
         console.log (MemberArr);
    };
    init();