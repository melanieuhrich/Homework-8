const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'mName'
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'mId'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'mEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'mOffice'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'iName'
    },
    {
        type: 'input',
        message: "What is the intern's id?",
        name: 'iId'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'iEmail'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'iSchool'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'eName'
    },
    {
        type: 'input',
        message: "What is the engineer's id?",
        name: 'eId'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'eEmail'
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'eGithub'
    },
]

const memberQuestion = {
    type: 'list',
    message: 'Which type of team member would you like to add?',
    name: 'member',
    choices: ['Engineer', 'Intern', 'I do not want to add anymore team members']
}

function init() {
    inquirer
        .prompt(managerQuestions)
        .then(data => {
            console.log(data);
            const manager = new Manager(data.mName, data.mId, data.mEmail, data.mOffice);
            employees.push(manager)
        })
}

function memberSelect() {
    if (data.member == 'Engineer') {
        inquirer
            .prompt(memberQuestion)
    } else if (data.member == 'Intern') {
        inquirer
            .prompt(internQuestions)
    } else {
        generateHtml()
    }
}

function inputEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(data => {
            console.log(data);
            const engineer = new Engineer(data.eName, data.eId, data.eEmail, data.eGithub);
            employees.push(engineer)
        })
}

function inputIntern() {
    inquirer
    .prompt(internQuestions)
    .then(data => {
        console.log(data);
        const intern = new Intern(data.iName, data.iId, data.iEmail, data.iSchool);
        employees.push(intern)
    })
}

function generateCards(data) {
    fs.appendFile('./dist/index.html', data.mName) //come back 
}

function generateHtml(data) {
    // generateCards(data)
    console.log(employees)
    writeFile(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Generator</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container pink">
        <h1 class="display-4">My Team</h1>
        </div>
        </div> 
        <h3>${manager.name}</h3>
    </body>
    </html>`)
}

function writeFile(htmlString) {
    fs.writeFile('./dist/index.html', htmlString, (error) =>
        error ? console.error(error) : console.log('Generating HTML...')) // coming too soon
}


init() 