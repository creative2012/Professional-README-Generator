const getLicence = require("./licenceInformation");
// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    instConf, install,
    usageConf, usage,
    licenceConf, licence,
    contribConf, contributing,
    testsConf, tests,
    questionsConf, gitUserName, email, questions 
  } = data;

  //object containing badge icon links
  const badges = {
    Apache: 'Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    BSD: 'BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    GPL: 'GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    Hippocratic: 'Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
    IBM: 'IPL_1.0-blue.svg)](https://opensource.org/license/ibmpl-php/)',
    MIT: 'MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Unlicence: 'Unlicense-blue.svg)](http://unlicense.org/)',
    WTFPL: 'WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
  
  }

  // array for table of contents items
  let toca = [' ## Table of Contents '];

  //check which sections user wants to add
  instConf ? toca.push('* [Installation](#installation)') : null;
  usageConf ? toca.push('* [Usage](#usage)') : null;
  contribConf ? toca.push('* [Contributors](#contributors)') : null;
  testsConf ? toca.push('* [Tests](#tests)') : null;
  licenceConf ? toca.push('* [Licence](#licence)') : null;
  questionsConf ? toca.push('* [Questions](#questions)') : null;

  //return the markdown
  return `# 💻 ${title}
  ${licenceConf ? '[![License: WTFPL](https://img.shields.io/badge/License-'+badges[licence] : ''}

  ## Description
  ${description}

  ${toca.length > 0 ? toca[0] :''} 
  ${toca.length > 1 ? toca[1] :''} 
  ${toca.length > 2 ? toca[2] :''}  
  ${toca.length > 3 ? toca[3] :''} 
  ${toca.length > 4 ? toca[4] :''}  
  ${toca.length > 5 ? toca[5] :''}  
  ${toca.length > 6 ? toca[6] :''} 

  ${instConf ? '## Installation': ''}

  ${instConf ? install: ''}

  ${usageConf ? '## Usage': ''}

  ${usageConf ? usage: ''}

  ${contribConf ? '## Contributors': ''}

  ${contribConf ? contributing: ''}

  ${testsConf ? '## Tests': ''}

  ${testsConf ? tests: ''}

  ${licenceConf ? '## Licence': ''}

  ${licenceConf ? getLicence(licence): ''}

  ${questionsConf ? '## Questions': ''}

  ${questionsConf ? '📫 Email address for further questions -'+ email: ''}

  ${questionsConf ? questions: ''}

  ${questionsConf ? '🔗 [Git Hub Profile](https://github.com/'+gitUserName+')': ''}

`;
}

module.exports = generateMarkdown;
