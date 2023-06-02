// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project uses the ${data.license} license.`;
  } return '';
}

// TODO: Create a function to generate markdown for README
// Project Title, Description, Table of Contents, Installation, Usage, License, Contributing, 
// Tests, and Questions (user and email for Q)
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

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

  ## Question

  If you have further questions about this project please feel free to contact my email at: ${data.email} 
  To see more examples of my work, please visit my GitHub page at: https://github.com/${data.githubUser} 
`;
}
