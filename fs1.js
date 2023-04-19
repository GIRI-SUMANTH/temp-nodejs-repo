// Importing the read and write sync methods from fs module
const {
    readFileSync,
    writeFileSync
} = require('fs');
const path = require('path');

// Acquiring paths of first, second & third text files
const first = path.join(__dirname, 'content', 'first.txt');
const second = path.join(__dirname, 'content', 'second.txt');
const newfile = path.join(__dirname, 'content', 'third.txt');

// Reading the contents from first and second text files
const f1 = readFileSync(first, 'utf-8');
const f2 = readFileSync(second, 'utf-8');
console.log(f1, f2);

// Writing into newfile --> creates new file if not present, else overwrites it
console.log('Start Read task');
const f3 = writeFileSync(newfile, 'This is 3rd file created by writeSync', 'utf-8');
console.log('Reading task');

// Writing in append mod
console.log('Start Write task');
writeFileSync(newfile, '.\n Hey I am here.', {
    flag: 'a'
});
console.log('Writing the task');