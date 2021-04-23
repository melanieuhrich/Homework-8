const inquirer = require('inquirer'); 
const fs = require('fs');

const questions = [ 

    managerQuestions = [
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
        },
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'member',
            choices: ['Engineer', 'Intern', 'I do not want to add anymore team members']
        },
    ],

    internQuestions = [
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
    ],
    
    engineerQuestions = [
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
]

inquirer
    .prompt(managerQuestions)
    .then(data => {
        if (data.member == 'Engineer') {
            inquirer 
                .prompt(engineerQuestions)
        }
    }), 
        
        
        
        
    //     (data) => {
    //     fs.writeFile('./dist/index.html', generateHtml(data), (error) => 
    //     error? console.error(error) : console.log('Generating HTML...'))
    // })


function generateHtml(data) {
    return `<!DOCTYPE html>
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
    </body>
    </html>`
}

    
