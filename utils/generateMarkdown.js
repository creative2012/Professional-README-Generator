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

  const badges = {
    Apache: 'Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    BSD: 'BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    GPL: 'GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    Hippocratic: 'Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
    IBM: 'IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    MIT: 'MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Unlicence: 'Unlicense-blue.svg)](http://unlicense.org/)',
    WTFPL: 'WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
  
  }

  let toca = [' ## Table of Contents '];

  instConf ? toca.push('- [Installation](#📁installation)') : null;
  usageConf ? toca.push('- [Usage](#📄usage)') : null;
  contribConf ? toca.push('- [Contributors](#👪contributors)') : null;
  testsConf ? toca.push('- [Tests](#🔍tests)') : null;
  licenceConf ? toca.push('- [Licence](#📜licence)') : null;
  questionsConf ? toca.push('- [Questions](#💡questions)') : null;

  let toc = ''
  if (toca.length > 1) {
    toca.forEach((item) => { toc += `${item}<br />` });
  }

  return `# 💻 ${title}
  ${licenceConf ? '[![License: WTFPL](https://img.shields.io/badge/License-'+badges[licence] : ''}

  ## 📋Description
  ${description}

  ---

  ${toc} 

  ${toc.length > 1 ? '---':''}

  ${instConf ? '## 📁Installation': ''}

  ${instConf ? install: ''}

  ${instConf ? '---': ''}

  ${usageConf ? '## 📄Usage': ''}

  ${usageConf ? usage: ''}

  ${usageConf ? '---': ''}

  ${contribConf ? '## 👪Contributors': ''}

  ${contribConf ? contributing: ''}

  ${contribConf ? '---': ''}

  ${testsConf ? '## 🔍Tests': ''}

  ${testsConf ? tests: ''}

  ${testsConf ? '---': ''}

  ${licenceConf ? '## 📜Licence': ''}

  ${licenceConf ? licence: ''}

  ${licenceConf ? '---': ''}

  ${questionsConf ? '## 💡Questions': ''}

  ${questionsConf ? '📫 '+ email: ''}

  ${questionsConf ? questions: ''}

  ${questionsConf ? '🔗 [Git Hub Profile](https://github.com/'+gitUserName+')': ''}

  ${questionsConf ? '---': ''}
`;
}

module.exports = generateMarkdown;
