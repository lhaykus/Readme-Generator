function generateReadme(answers) {
    return ` #${answers.title}

    ## Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contriubting](#contriubtion)
    -[Tests](#tests)
    

    ## Description
    ${answers.description}

    ##Installation 
    ${answers.installation}


    ##Usage 
    ${answers.usage}

    ##License


    ##Contributing
    ${answers.constriubtion}

    ##Tests 
    ${answers.tests}


    ##Contact Info
    ${answers.github}
    ${answers.email}
    
    
    
    
    
    
    `
    
}

module.exports = generateReadme;

















