// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

// TODO: Create an array of questions for user input
const gernerateReadMe = ({ title, description, instructions, usage, contribution, test, license, github, email, }) =>

`# Table of Contents
1. [Project Title](#project-title)
2. [Description](#description)
3. [Insallation Instructions](#installation-instructions)
4. [Usage Information](#usage-information)
5. [Contribution guidelines](#contribution-guidelines)
6. [Test Instructions](#test-instructions)
7. [License Type](#license-type)
8. [Git hub username](#git-hub-username)
9. [Email](#email)









## Project Title
    
    ### ${title}



        
## Description 
     
    ### ${description}  




    
    
## Installation instructions 
     
    ### ${instructions}





        
   
## Usage information 
     
    ### ${usage}





        
## Contribution guidelines 
     
    ### ${contribution}  






        
## Test instructions 
     
    ### ${test}  





    
## License type 
     
    ### ${license}   






    
## Git hub username 
     
    ### ${github}






    
## Email 
     
    ### ${email}`;

    inquirer
    .prompt ([
        { 
            name: 'title',
            message: 'What is the title of your project?',
            type: 'input',


        },

        {
            name: 'description',
            message: 'Write a short description of what your project does',
            type: 'input',
        },

        {
            name: 'instructions',
            message: 'Please enter any instructions needed for project to function',
            type: 'input'
        },

        {
            name: 'usage',
            message: 'Enter any usage information here',
            type: 'input'
        },

        {
            name: 'contribution',
            message: 'Enter the constribution guidlines of this project',
            type: 'input'
        },
        {
            name: 'test',
            message: 'Enter test instructions needed for this project',
            type: 'input'
        },
        {
            name: 'license',
            message: 'which license are you using',
            type: 'list',
            choices:['MIT','GNU','BSD','Apache',]
        },
        {
            name: 'github',
            message: 'enter your github username',
            type:'input'
        },
        {    name: 'email',
             message: 'enter email',
             type: 'input'
    },

]).then(data => {
    const html = gernerateReadMe(data);
    console.log(html);
    fs.writeFile('README.md', html, (err) => {
        if(err) {
            console.log(err);

        } else {
            console.log('success!')
        }
    } )
});