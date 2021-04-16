// declare packages needed for the app
const { prompt } = require("inquirer");
const inquirer = require("inquirer");

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
	},
];

const promptUser = (questions) => {
	return inquirer.prompt(questions);
};

const test = promptUser(questions).then((results) => console.log(results));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
