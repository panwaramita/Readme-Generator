// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
      break;
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      break;
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      break;
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]'
      break;
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
      break;
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]'
      break;
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
      break;
    case 'GNU AGPL v3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]'
      break;
    case 'GNU GPL v2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]'
      break;
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
      break;
    case 'GNU LGPL v3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]'
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
      break;
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
      break;
    default:
      return "";
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '(https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GNU GPL v3':
      return '(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'The MIT License':
      return '(https://opensource.org/licenses/MIT)'
      break;
    case 'BSD 2-Clause License':
      return '(https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'BSD 3-Clause License':
      return '(https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Boost Software License 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return '(http://creativecommons.org/publicdomain/zero/1.0/)'
      break;
    case 'Eclipse Public License 1.0':
      return '(https://opensource.org/licenses/EPL-1.0)'
      break;
    case 'GNU AGPL v3':
      return '(https://www.gnu.org/licenses/agpl-3.0)'
      break;
    case 'GNU GPL v2':
      return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
      break;
    case 'GNU GPL v3':
      return '(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'GNU LGPL v3':
      return '(https://www.gnu.org/licenses/lgpl-3.0)'
      break;
    case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)'
      break;
    case 'Unlicense':
      return '(http://unlicense.org/)'
      break;
    default:
      return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}\n`

    +
    renderLicenseSection(data.license)
    +
    `\n ## Table of Contents

* [Project Description](#Project Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
 * [License](#License)
* [Contributions](#Contributions)
* [Questions](#Questions)

        ## Project Description
        ${data.description} 

        #Installation
        ${data.installation} 

        # Usage
        ${data.usage}
        
        # Tests
        ${data.tests}
        
        # Contributions
        ${data.contribution}

        # Questions
        For more question , please contract project owner via email listed below.
        Name: ${data.name}:https://github.com/$(data.name)
        Mail: ${data.email}
  `
}

module.exports = generateMarkdown;
