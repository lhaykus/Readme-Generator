function generateReadme(answers) {
    return ` 
 # ${answers.title}

## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contriubting](#contriubtion)
 - [Tests](#tests)
    

 ## Description
    ${answers.description}

  ## Installation 
    ${answers.installation}


 ## Usage 
    ${answers.usage}

## License


 ## Contributing
    ${answers.constriubtion}

## Tests 
    ${answers.tests}


 ## Questions
    My Github: [${answers.github}](https://github.com/${answers.github}) <br />
    <br />
    Send me an email: ${answers.email}  
    `
    
}

module.exports = generateReadme;

















