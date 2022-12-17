const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const { table } = require('console');

const memberArr = [];
const cardArr = [];
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
            memberArr.push(manager);
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
            memberArr.push(intern);
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
            memberArr.push(engineer);
            init();
        })
        
    };

    function generateTable(){
        convertToHTML(memberArr);
    };
    
    init();

    function convertToHTML(memberArr) {
        const generateHTML = (table)  =>
            `<!DOCTYPE html>
              <html lang="en">
                 <head>
                   <meta charset="UTF-8">
                   <meta http-equiv="X-UA-Compatible" content="ie=edge">
                   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                   <title>Table</title>
                </head>
                <body>
                    <main class="p-5 mb-4 header bg-light">
                    <div class="container">
                            ${table}
                    </div>
                </main>
              </body>
         </html>`;
         
    
        memberArr.forEach(member => {
            switch (member.getType()) {
                case 'Manager':
                    cardArr.push( `<div class="card" style="width: 18rem;">
                         <h1 class="card-img-top">Name: ${member.name}</h1>
                         <div class="card-body">
                            <h5 class="card-title">Id: ${member.id}</h5>
                            <p class="card-text">Email: ${member.email}</p>
                            <p class="btn btn-primary">Officenumber: ${member.getOfficenumber()}</p>
                        </div>
                     </div>`);
                    
                break;
                case 'Intern':
                    cardArr.push( `<div class="card" style="width: 18rem;">
                         <h1 class="card-img-top">Name: ${member.name}</h1>
                         <div class="card-body">
                            <h5 class="card-title">ID: ${member.id}</h5>
                            <p class="card-text">Email: ${member.email}</p>
                            <p class="btn btn-primary">School: ${member.getSchool()}</p>
                        </div>
                     </div>`);
                break;
                case 'Engineer':
                    cardArr.push( `<div class="card" style="width: 18rem;">
                         <h1 class="card-img-top">Name: ${member.name}</h1>
                         <div class="card-body">
                            <h5 class="card-title">ID: ${member.id}</h5>
                            <p class="card-text">Email: ${member.email}</p>
                            <p class="btn btn-primary">Github: ${member.getGithub()}</p>
                        </div>
                     </div>`);
                break;
        }

        var finalTemplate = generateHTML(cardArr.toString());

        fs.writeFile('table.html', finalTemplate,(err)  =>
             err ? console.log (err) : console.log('Successfully created table.html!')
        );

    });
}
