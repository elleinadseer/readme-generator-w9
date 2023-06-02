// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![licenseBadge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`;
  } 
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
This project uses the ${license} license.`;
  } return '';
}

// TODO: Create a function to generate markdown for README
// Project Title, Description, Table of Contents, Installation, Usage, License, Contributing, 
// Tests, and Questions (user and email for Q)
function generateMarkdown(data) {
  return `# ${data.projectTitle}  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  The requirements to install this project are: ${data.installation}

  ## Usage

  The requirements to use this project are: ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  How to contribute to the project: ${data.contributing}

  ## Tests

  How to test this programme: ${data.tests}

  ## Questions

  If you have further questions about this project please feel free to contact my email at: ${data.email} <br>
  To see more examples of my work, please visit my GitHub page at: https://github.com/${data.githubUser} 
`;
}

module.exports = generateMarkdown