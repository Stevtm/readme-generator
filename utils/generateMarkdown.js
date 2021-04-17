// function that returns a license badge
// if there is no license, return an empty string
const renderLicenseBadge = (license) => {
	const url = `img.shields.io/badge/license-${license}-green`;

	return `<img
  src="https://img.shields.io/badge/license-MIT-green"
  alt="License Badge"
  />`;
};

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
  ${renderLicenseBadge(license)}
  ${license}

  ## Contributing 
  ${contributing}

  ## Tests 
  ${tests}

  ## Contact Me
  The best ways to contact me are by ${contact}.

  - <img src="./GitHub-Mark-32px.png"/>GitHub: [${github}](https://github.com/${github})
  - Email: ${email}

`;
}

module.exports = generateMarkdown;
