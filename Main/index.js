const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employees = [];

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'office'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github'
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the intern's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school'
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
            const manager = new Manager(data.name, data.id, data.email, data.office);
            employees.push(manager);
            memberSelect();
        })
}

function memberSelect() {
    inquirer
        .prompt(memberQuestion)
        .then(data => {
            if (data.member == 'Engineer') {
                inputEngineer()
            } else if (data.member == 'Intern') {
                inputIntern()
            } else {
                writeFile(generateHtml(appendCards()))
            }
        })
}

function inputEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(engineer);
            memberSelect()
        })
}

function inputIntern() {
    inquirer
        .prompt(internQuestions)
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(intern);
            memberSelect()
        })
}

function writeFile(htmlString) {
    fs.writeFile('./dist/index.html', htmlString, (error) =>
        error ? console.error(error) : console.log('Generating HTML...')) 
}

function appendCards() {
    let html = ''; 
    employees.forEach(employee => {
        html += getInfo(employee)
    });
    return html;
}

function getInfo(employee) { 
    let template = 
    `<div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${employee.name}</span>
                <span>${employee.getRole()}</span>
                <hr>
                <p>ID: ${employee.id}</p>
                <hr>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <hr>
                ${miscProperty(employee)} 
            </div>
        </div>
    </div>`; 
    return template;
}

function miscProperty(employee) {
    if (employee.getRole() == 'Engineer') {
        return `<p>GitHub: <a href="https://github.com/${employee.github}" target="_blank"c>${employee.github}</a></p>`
    } else if (employee.getRole() == 'Manager') {
        return `<p>Office Number: ${employee.officeNumber}</p>`
    } else {
        return `<p>School: ${employee.school}</p>`
    }
}

init();

