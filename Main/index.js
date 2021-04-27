const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./generateHtml')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { WSAEHOSTDOWN } = require('constants');

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
        .prompt(managerQuestions)  //prompt the user for responses
        .then(data => {   //THEN AFTER the user have given us responses
            console.log(data);
            const manager = new Manager(data.mName, data.mId, data.mEmail, data.mOffice);
            employees.push(manager);
            memberSelect();
        })
}

/**
 * 
 * employees = [{manager obj}, {engi1}, {engi2}, {int}]
 * {
 * name: "Bob Jones",
 * id: "3",
 * email: "bobjones@gmail.com",
 * office: "4B",
 * role: "Manager"
 * }
 * function templateMaker (dataAboutOneEmployee) {
 * return 
 * var template = `
 * div.card
 *  h1 ${dataABoutOneEmployee.name}
 *  h3 ${role}`
 * 
 * }
 * employees.forEach(employee=> {
 * templateMaker(employee)})
 */

function getInfo(employee) {
    let template = 
    `<div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${employee.name}</span>
                <span>${employee.role}</span>
                <hr>
                <p>ID: ${employee.id}</p>
                <hr>
                <p>Email: <a href="#">${employee.email}</a></p>
                <hr>
                <p>Office number: </p>
            </div>
        </div>
    </div>`; 
    return template;
}

function appendCards(employeeData) {
    employees.forEach(employee => {
        getInfo(employee)
    });
    // getInfo();
    fs.appendFile('./dist/index.html', employeeData, (error) =>
    error ? console.error(error) : console.log(''))
}

function memberSelect() {
    // prompt user about what type of employee they are adding
    inquirer.prompt(memberQuestion)
        .then(data => {
            if (data.member == 'Engineer') {
                inputEngineer()
            } else if (data.member == 'Intern') {
                inputIntern()
            } else {
                writeFile(generateHtml())
                .then(appendCards())
            }
        })
}

function inputEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(data => {
            console.log(data);
            const engineer = new Engineer(data.eName, data.eId, data.eEmail, data.eGithub);
            employees.push(engineer);
            memberSelect()
        })
}

function inputIntern() {
    inquirer
        .prompt(internQuestions)
        .then(data => {
            console.log(data);
            const intern = new Intern(data.iName, data.iId, data.iEmail, data.iSchool);
            employees.push(intern);
            memberSelect()
        })
}

// the story of a user using this cla

/**
 * 
 user starts the app -  node index.js
 user gets prompted with questions regarding the manager  --
 answers from user are added to employee array ---
 then user is prompted is next employee member intern engineer or no more ---
if theres engineer
    do engineer stuff
if intern
    do intern stuff

    --> both these lead to asking if theres another employee 

if no more
    take all the data from employee array and generate the html
 */

function writeFile(htmlString) {
    fs.writeFile('./dist/index.html', htmlString, (error) =>
        error ? console.error(error) : console.log('Generating HTML...')) 
        // .then(appendCards(employeeData))
}

init();

