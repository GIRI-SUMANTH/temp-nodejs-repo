let amt = 10
if (amt > 0)
    console.log('Positive number');
else if(amt===0)
    console.log('Zero');
else
    console.log('Negative number');

// GLOBALS

/*
__dirname   - path to curr dir
__filename  - curr file name
require     - function to use modules
module      - info about curr module
process     - info about env of program
*/

// console.log(__filename);

// setInterval(()=>{
//     console.log('Hello World!');
// },1000)

// // Importing the mod1.js module
// let m1 = require('D:\\OneDrive\\Desktop\\RJ\\NodeJS\\mod1.js');
// let m2 = require('./mod1.js');
// console.log(m1,m2);
// console.log(m2.sub(5, 6));
// console.log(m2.add(5, 6));

// Installing npm packages

// npm --version                    --> Checks the version of npm
// npm i <package_name>             --> local dependency (uses it only in current project)
// npm install -g <package_name>    --> global dependency (uses it any project)

// Installing package.json (manifesting the file and stores important info of package)

// create package.json in root folder, & create props
// npm init -y (All set to default)
// npm init (Step by step installation, click Enter to skip)

// Nodemon will watch and restarts automatically after changes