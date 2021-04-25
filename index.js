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
				console.log("Please enter a title!");
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
				console.log("Please enter a description!");
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
				console.log("Please enter installation instructions!");
				return false;
			}
		},
		default:
			"Fork the repository and execute `npm install` to install dependencies.",
	},
	{
		type: "input",
		name: "usage",
		message: "Please briefly describe the how to use the application.",
		validate: (usageInput) => {
			if (usageInput) return true;
			else {
				console.log("Please enter a descrption!");
				return false;
			}
		},
		default: "Use `node index.js` to run the application in the command line!",
	},
	{
		type: "list",
		name: "license",
		message: "Which license is applicable to your project?",
		choices: [
			"GNU AGPLv3",
			"GNU GLPv3",
			"GNU LGPLv3",
			"Apache License 2.0",
			"MIT License",
			"Boost Software License 1.0",
			"The Unlicense",
			"Mozilla Public License 2.0",
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
		default:
			"Please follow the Contributor Covenant! https://www.contributor-covenant.org/",
	},
	{
		type: "input",
		name: "tests",
		message:
			"Which tests should be executed to ensure that the application is functioning as intended?",
		validate: (testInput) => {
			if (testInput) return true;
			else {
				console.log("test?!");
				return false;
			}
		},
		default:
			"Unit and functional testing of the terminal input and README generation.",
	},
	{
		type: "input",
		name: "github",
		message: "Please enter your GitHub username.",
		validate: (githubInput) => {
			if (githubInput) return true;
			else {
				console.log("Please enter a username!");
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
				console.log("Please enter an email address!");
				return false;
			}
		},
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
const init = () => {
	promptUser(questions)
		.then((results) => generateMarkdown(results))
		.then((pageMD) => writeToFile(pageMD))
		.then(() => {
			console.log("Your README has been created!");
		});
};

init();
