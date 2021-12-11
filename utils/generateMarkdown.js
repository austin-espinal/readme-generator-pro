// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
module.exports = data => {
  //destructured inquirer data
  const { title, description, ...other } = data
  return `
# ${title}

## Description 

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${other.installation}

## Usage 

${other.usage}


## License



## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

(optional)


## Contributing

${other.contributing}

## Tests

${other.tests}

## Questions

${other.github}
${other.link}
${other.email}

List above is my Github and email. These are good ways to reach me for additional questions. 
`;
};

