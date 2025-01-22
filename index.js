#!/usr/bin/env node

const process = require('node:process');


const alphaLC = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase letters



/**
 * Generate a password based on user preferences
 * @param {number} length - Length of the password
 * @param {boolean} hasAlphaUC - Include uppercase letters
 * @param {boolean} hasNumbers - Include numbers
 * @param {boolean} hasSymbols - Include symbols
 * @returns {string} - Generated password
 */

const createPassword = (length, hasAlphaUC, hasNumbers, hasSymbols) => {
    let chars = alphaLC; 

    return generatePassword(length, chars);
};

const generatePassword = (length, char) => {
    let password = '';

    // Generate the password
    for (let i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length));
    }

    return password;
};


function printHelpMessage() {
    console.log(`
Usage: node index.js [options]

Options:
  --length <number>, --len, length   Specify the length of the password (Default Length = 8)
  --help, --h, help                  Show help message

  How to use this app?
  node index.js --length 12 
  node index.js --len 10
  node index.js length 12  
  node index.js --help
`);
};


/**
 * Handles the arguments provided to the application by the user.
 * 
 * @param {string[]} arguments The arguments provided by the user
 */


function handleArguments(arguments) {
    let length = 8; 

    if (arguments.length === 0) {
        console.error('Error: No arguments provided.');
        printHelpMessage();
        return; 
    }

    for (let i = 0; i < arguments.length; i++) {
            
            if (arguments[i] === '--help' || arguments[i] === '--h' || arguments[i] === 'help') {
                printHelpMessage();
                return;
            }
        
            if (arguments[i] === '--length' || arguments[i] === '--len' || arguments[i] === 'length') {
                if (i + 1 < arguments.length) { 
                    const lengthInput = parseInt(arguments[i + 1]);
                    if (!isNaN(lengthInput) && lengthInput > 0) {
                        length = lengthInput;
                    } else {
                        console.error('Error: Please provide a valid number for --length.');
                        return;
                    }
                } else {
                    console.error('Error: --length flag requires a number.');
                    return;
                }
            }
    }
        // Generated password
     
        console.log(`Generated Password: ${createPassword(length)}`);
    
}

const arguments = process.argv.slice(2);

handleArguments(arguments);





