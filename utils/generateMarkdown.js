const badges = {
  Apache: 'Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  BSD: 'BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  GPL: 'GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  Hippocratic:'Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
  IBM:'IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
  MIT:'MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Unlicence:'Unlicense-blue.svg)](http://unlicense.org/)',
  WTFPL: 'WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'

}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: WTFPL](https://img.shields.io/badge/License-${badges[data.licence]}
`;
}

module.exports = generateMarkdown;
