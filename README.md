<<<<<<< HEAD
# Team Profile Generator

## Purpose of Assignment

Create a command-line application that generates an HTML file based on the user's inputs.

## What I Did and Why

### generateHtml.js

Lines 1-26: Declare the generateHtml function and pass in cardHTML. Insert cardHTML in the body. Return the HTML string.

Line 28: Make generateHtml available to be exported for use in other files.

### index.js

Lines 1-6: Declare consts and require their corresponding dependencies or files. 

Line 8: Declare const employees and define it as an empty array. 

Lines 10-31: Declare const managerQuestions and define the corresponding questions types, messages, and names.

Lines 33-54: Declare const engineerQuestions and define the corresponding questions types, messages, and names.

Lines 56-77: Declare const internQuestions and define the corresponding questions types, messages, and names. 

Lines 79-84: Declare const memberQuestion and define the corresponding question type, message, name, and choices.

Lines 86-94: Declare the init function. Tell it to utilize the inquirer package. Prompt managerQuestions and then take the user input data, use it to define a new Manager (const manager), and add that manager to the employees array. Then, call memberSelect(). 

Lines 96-108: Declare the memberSelect function. Utilize the inquirer package. Prompt memberQuestion and then take the user input data. If that data corresponds with Engineer, call inputEngineer(). If that data corresponds with Intern, call inputIntern(). If it corresponds with neither (not adding anymore members), call writeFile(), within which call generateHtml(), within which call appendCards(). 

Lines 110-118: Declare the inputEngineer function. Utilize the inquirer package. Prompt engineerQuestions and then take the user input data, use it to define a new Engineer (const engineer), and add that engineer to the employees array. Then, call memberSelect(). 

Lines 120-128: Declare the inputIntern function. Utilize the inquirer package. Prompt internQuestions and then take the user input data, use it to define a new Intern (const intern), and add that intern to the employees array. Then, call memberSelect(). 

Lines 130-133: Declare the writeFile function and pass in htmlString. Tell fs to write the index.html file in dist folder. If there is an error, log error. If it is successful, console.log 'Generating HTML...'. 

Lines 135-141: Declare the appendCards function. First, declare let html and make it an empty string. Then, for each employee, call getInto(employee) and add that plus whatever already exists in let html and make that the new definition of html. Then, return html.

Lines 143-160: Declare the getInfo function and pass in employee. Declare let template and define it as the corresponding string with the employee name, getRole(), id, email and miscProperty() inserted. Return template. 

Lines 162-170: Declare the miscProperty function and pass in employee. If the role of employee is Engineer, return the corresponding string (which will deliver the GitHub username). If the role of employee is Manager, return the corresponding string (which will deliver the office number). If the role of employee is Intern, return the corresponding string (which will deliver the school).

Line 172: Call init(), which will start the entire process.

## Gif

![gif](/Assets/teamgenerator.gif)

## Screenshot of Sample HTML

![Screenshot](/Assets/teamgenerator.png)
=======
# Homework-8
>>>>>>> 729714f4a9a59dca5b61ba1d0efbb675f3c3c7bc
