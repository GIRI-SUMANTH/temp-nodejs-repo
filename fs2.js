// Importing the readFile and writeFile methods from fs module
const {
    readFile,
    writeFile,
} = require('fs');
const path = require('path');

// Acquiring paths of first, & third text files
const f1 = path.join(__dirname, 'content', 'first.txt');
const newfile = path.join(__dirname, 'content', 'third_async.txt');

// Reading the contents from first file async
console.log('Start Read task');
readFile(f1, 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
    console.log('Reading task');
});

// Writing the contents int third_async file async
console.log('Start Write task');
writeFile(newfile, 'This is created by using Async file', 'utf-8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
    console.log('Writing the task');
});