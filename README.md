# password-generator
A Command-Line Interface (CLI) application built with Node.js to generate secure passwords based on user-defined parameters.

## Features
- Generate passwords consisting of lowercase letters.
- Option to include uppercase letters, numbers, and symbols.
- Specify the password length.
- Display help error messages for invalid input.


## Installation

1. Ensure that [Node.js](https://nodejs.org/) is installed on your system.
2. Clone this repository or download the source code:
   ```bash
   git clone https://github.com/WalidJer/password-generator.git

# Usage: 

node index.js [options]

Options:
  --length <number>, --len, length   Specify the length of the password (Default Length = 8)
  --uppercase, --uc, uppercase       Include uppercase letters
  --numbers, --num, numbers          Include numbers
  --symbols, --sym, symbols          Include symbols
  --help, --h, help                  Show help message

  How to run this app?
  node index.js --length 12 --uppercase --numbers --symbols
  node index.js --len 10 --uc --num
  node index.js --help
