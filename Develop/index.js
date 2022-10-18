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