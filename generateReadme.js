//Function to create the readme using the users answers and putting them in the right section of the readme
function generateReadme(answers) {
    return ` 
 # ${answers.title}

## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contriubting](#contriubtion)
 - [Tests](#tests)
    

 # Description
   ${answers.description}

  # Installation 
   ${answers.installation}


 # Usage 
   ${answers.usage}

# License
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

 # Contributing
   ${answers.contriubtion}

# Tests 
   ${answers.tests}


 # Questions
 If you have any questions you may reach me at my Github: [${answers.github}](https://github.com/${answers.github}) or feel free to send me an email at
    ${answers.email}  
    `
    
}

module.exports = generateReadme;

















