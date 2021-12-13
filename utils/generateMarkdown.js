// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'NONE') {
    return '';
  }
  return`
  ![badmath](https://img.shields.io/static/v1?label=license&message=${license}&color=green)
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `
    [${license}](https://choosealicense.com/licenses/mit/)
    `;
  }
  if (license === 'Apache 2.0') {
    return `
    [${license}](https://choosealicense.com/licenses/apache-2.0/)
    `;
  }
  if (license === 'GNU General Public 3.0') {
    return `
    [${license}](https://choosealicense.com/licenses/gpl-3.0/)
    `;
  }
  if (license === 'Creative Common Zero 1.0') {
    return `
    [${license}](https://choosealicense.com/licenses/cc0-1.0/)
    `;
  }
  if (license === 'NONE') {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NONE') {
    return '';
  }
  return `
  ## License  
    
${renderLicenseLink(license)}  
The link to the license can be found above  
  `;
};

//creates license section link whether a license is chosen
function tableLink(license) {
  if (license === 'NONE') {
    return '';
  }
  return '* [License](#license)';
};

// TODO: Create a function to generate markdown for README
module.exports = data => {
  //destructured inquirer data
  const { title, description, ...other } = data
  return `
# ${title}
${renderLicenseBadge(other.license)}

## Description 

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${tableLink(other.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${other.installation}

## Usage 

${other.usage}

${renderLicenseSection(other.license)}  

## Contributing

${other.contributing}

## Tests

${other.tests}

## Questions

[${other.github}](https://github.com/${other.github})   
${other.email}  

${other.add} 
`;
};

