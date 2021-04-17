// declare packages needed for the app
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of the project?",
		validate: (nameInput) => {
			if (nameInput) return true;
			else {
				console.log("Please enter the title of the project!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "description",
		message: "Please provide a desription of the project.",
		validate: (descInput) => {
			if (descInput) return true;
			else {
				console.log("Please provide a description of the project!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "installation",
		message:
			"Please describe the installation instructions for users of the application.",
		validate: (installInput) => {
			if (installInput) return true;
			else {
				console.log(
					"Please provide a description of the installation instructions for users!"
				);
				return false;
			}
		},
		default: "Fork the repository and run npm install",
	},
	{
		type: "input",
		name: "usage",
		message: "Please briefly describe the how to use the application.",
		validate: (usageInput) => {
			if (usageInput) return true;
			else {
				console.log(
					"Please provide a brief description of how to use the application!"
				);
				return false;
			}
		},
		default: "Use node.js to run the application in the command line!",
	},
	{
		type: "list",
		name: "license",
		message: "Which license is applicable to your project?",
		choices: [
			"GNU General Public License v3.0",
			"MIT License",
			'BSD 2-Clause "Simplified" License',
			'BSD 3-Clause "New" or "Revised" License',
			"Boost Software License 1.0",
			"Creative Commons Zero v1.0 Universal",
			"Eclipse Public License 2.0",
			"GNU Affero General Public License v3.0",
			"GNU General Public License v2.0",
			"GNU Lesser General Public License v2.1",
			"Mozilla Public License 2.0",
			"The Unlicense",
		],
		default: "MIT License",
	},
	{
		type: "input",
		name: "contributing",
		message:
			"What guidelines should other contributors to this project follow?",
		validate: (contributeInput) => {
			if (contributeInput) return true;
			else {
				console.log(
					"Please describe which guidelines other contributors should follow!"
				);
				return false;
			}
		},
		default: "Pull Requests are appreciated!",
	},
	{
		type: "input",
		name: "tests",
		message: "test...huh?",
		validate: (testInput) => {
			if (testInput) return true;
			else {
				console.log("test?!");
				return false;
			}
		},
		default: "...test??",
	},
	{
		type: "input",
		name: "github",
		message: "Please enter your GitHub username.",
		validate: (githubInput) => {
			if (githubInput) return true;
			else {
				console.log("Please enter your GitHub username!");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "email",
		message: "Please enter your email address",
		validate: (emailInput) => {
			if (emailInput) return true;
			else {
				console.log("Please enter your email address!");
				return false;
			}
		},
	},
	{
		type: "checkbox",
		name: "contact",
		message: "Please select acceptable methods of contacting you.",
		choices: ["email", "GitHub", "phone", "pigeon"],
		validate: (contactInput) => {
			if (contactInput) return true;
			else {
				console.log("Please select at least one method of contact!");
				return false;
			}
		},
		default: "email",
	},
];

const promptUser = (questions) => {
	return inquirer.prompt(questions);
};

// function that writes a README file
const writeToFile = (data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/README.md", data, (err) => {
			// if there is an error, reject the Promise and send error to the Promise's `.catch()` method
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "File created!",
			});
		});
	});
};

// function that initializes the application
// const init = () => {
// 	promptUser(questions)
// 		.then((results) => generateMarkdown(results))
// 		.then((pageMD) => writeToFile(pageMD));
// };

const tempArray = {
	title: "COVacation",
	description:
		"An application that allows the user to search for flights to a destination and shows relevant COVID-19 statistics at the destination country.",
	intallation: "Fork the repository from GitHub onto your local machine.",
	usage:
		"Use `npm install` to install dependencies and then `node index.js` to start the application.",
	license: "MIT",
	contributing: "Pull requests are welcome!",
	tests:
		"here are some tests you can run to make sure the application is working correclty.",
	github: "stevtm",
	email: "stevtm@stevtm.ca",
	contact: ["email", "phone"],
};

const init = () => {
	const pageMD = generateMarkdown(tempArray);
	writeToFile(pageMD);
};

// function call to initialize app
init();
