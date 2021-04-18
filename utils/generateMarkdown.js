// function that returns a license badge for the selected license
const renderLicenseBadge = (license) => {
	const url = `img.shields.io/badge/license-${license}-green`;

	return `<img
  src="https://img.shields.io/badge/license-MIT-green"
  alt="License Badge"
  />`;
};

// function that returns a link to a description of the selected license
const renderLicenseDesc = (license) => {
	let url = `https://choosealicense.com/licenses/`;

	switch (license) {
		case "GNU AGPLv3":
			url += "agpl-3.0/";
			break;
		case "GNU GLPv3":
			url += "gpl-3.0/";
			break;
		case "GNU LGPLv3":
			url += "lgpl-3.0/";
			break;
		case "Apache License 2.0":
			url += "apache-2.0/";
			break;
		case "MIT License":
			url += "mit/";
			break;
		case "Boost Software License 1.0":
			url += "bsl-1.0/";
			break;
		case "The Unlicense":
			url += "unlicense/";
			break;
		case "Mozilla Public License 2.0":
			url += "mpl-2.0/";
			break;
	}

	return url;
};

console.log(renderLicenseDesc("Mozilla Public License 2.0"));

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

  ${renderLicenseBadge(license)}

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
  This application is covered under the following license: ${license}.
  
  You can read more about this license, including its permissions, conditions, and limitations here: ${renderLicenseDesc(
		license
	)}

  ## Contributing 
  ${contributing}

  ## Tests 
  ${tests}

  ## Questions
  Please don't hesitate to reach out to me with any questions about this project or others! 

  I can be reached via: 
  - Github: [${github}](https://github.com/${github})
  - Email: ${email}
`;
}

module.exports = generateMarkdown;
