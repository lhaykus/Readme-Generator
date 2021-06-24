//Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./generateReadme');



// Creating questions to create readMe
inquirer
.prompt([
    //Project title
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',

},
{
    //Project Description

    type: 'input',
    name: 'description',
    message: 'Enter a description of your project including how it works, the motivations behind it, and what did you learn.',

},
{
    //Description of installation instructions

    type: 'input',
    name: 'installation',
    message: 'Enter a description of the installation instructions for your project.',
},
{
    //Usage Information 

    type: 'input',
    name: 'usage',
    message: 'Enter the usage information for your project',
},
{
    //Contribution guidelines
    
    type: 'input',
    name: 'contriubtion',
    message: 'Enter the contribution guidelines for your project',
},
{
    //Instructins for project
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions for your project',
},
{
    //Github username
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    //Email address
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    //A list of what license are for this project
    type: 'list',
    name: 'license',
    message: 'What license did you use for this project?',
    choices: [ 
        "Apache",
        "Boost",
        "Eclipse",
        "IBM",
        "Mozilla",
        "WTFPL",

    ],
},

])
.then((answers) => {
const READMEfile = generateReadme(answers);
//writes to new file 'readme.md'
fs.writeFile('README.md', READMEfile, err => {
    if(err) {
        return console.log(err);
    }else {
        console.log("Readme has been created")
    }
});


})
.catch((err) => {
console.log(err);
});

// TODO: Create a function to write README file

   

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
