// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function that generates markdown for README
function generateMarkdown(data) {
	const {
		title,
		description,
		installation,
		usage,
		license,
		contributing,
		tests,
		github,
		email,
		contact,
	} = data;

	return `# ${title}

  ## Description
  ${description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact Me](#contact-me)

  ## Installation
  ${installation}

  ## Usage 
  ${usage} 

  ## License
  ${license}

  ## Contributing 
  ${contributing}

  ## Tests 
  ${tests}

  ## Contact Me
  ${github}
  ${email}
  ${contact}
`;
}

module.exports = generateMarkdown;
