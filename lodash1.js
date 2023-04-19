// Importing the lodash package
const ld = require('lodash');

let a=[1,[2,3],[4,[5],6,[[7],8]],9];

// Flatten the array by 1 level
let arr=ld.flatten(a);
console.log(arr);

// Flatten the array by d levels
let arr1 = ld.flattenDepth(a,2);
console.log(arr1);

// Flatten the array completely
let arr2=ld.flattenDeep(a);
console.log(arr2);

// Splitting arr into chunks of size 4
console.log(ld.chunk(arr2,4));