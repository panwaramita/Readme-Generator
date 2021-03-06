// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const validateEmail = require('email-validator');
//Create an array of questions for user input
const questions = () => inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of the project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter all the Installation  required for the project?',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Enter the Usage of the project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select the License for the project?',
    choices: ['Apache 2.0 License', 'GNU GPL v3', 'The MIT License', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU AGPL v3', 'GNU GPL v2', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'Unlicense']
  },
  {
    type: 'confirm',
    name: 'contributor',
    message: 'Is your project open for contributions?',
    default: true
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please explain your contribution guidlines for this project:',
    when: ({ contributor }) => {
      if (contributor)
        return true
      else
        return
      false
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the tests for the project?',
  },
  {
    type: 'input',
    name: 'name',
    message: 'Enter the github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the email?',
    validate: (email) => {
      if (validateEmail.validate(email))
        return true;
      else
        return `${email} is not valid`
    }
  }
]);


//Create a function to initialize app
const init = () => {
  questions().then((answers) => {
    try {
      const read = generateMarkdown(answers);
      fs.writeFileSync('ReadmeGenrator.md', read);
      console.log('Successfully wrote to Readme file');
    } catch (error) {
      console.log(error);
    }
  });
};

// Function call to initialize app
init();
