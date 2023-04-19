const path =require('path');
// console.log(path);

// Seperator in a file path --> (\ for windows) & (/ for macOS)
console.log(path.sep);

// Delimiter in a file path  --> (; for windows) & (: for macOS)
console.log(path.delimiter);

// Creating a file path using join
const fp=path.join('D:','OneDrive','Desktop','RJ','NodeJS','os1.js');
console.log(fp);

// The parent Directory of a file path
console.log(path.dirname(fp));

// The basename of a file path
console.log(path.basename(fp));

// Resolving 
const cwd = path.resolve(__dirname,'/abc','/efg','tur');
console.log(cwd);