// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const fs = require('fs')

// TODO: Create an array of questions for user input
const gernerateReadMe = ({ title, description, instructions, usage, contribution, test, license, questions, email, }) =>

`   ## project: ${title}
    
              
    ## description: ${description}  
    
    
    ## installation instructions: ${instructions}
        
       
    ## usage information: ${usage}
        
    ## contribution guidelines: ${contribution}  
        
    ## test instructions: ${test}  
    
    
    ## License type: ${license}   
    
    ## Git hub username: ${questions}
    
    ## Email for more info: ${email}`;

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
            type: 'input'
        },
        {
            name: 'questions',
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