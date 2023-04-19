// Modules are the encapsulated code blocks, which only share the minimum info
// In common JS, every file is a module

// Some constant members
const j = 'John',
    s = 'Susan',
    p = 'Peter';

// Function sayHi
const sayHi = (name) => {
    console.log('Hi there,', name);
};

// Addition
const add = (a, b) => {
    return a + b;
};

// Subtraction
const sub = (a, b) => {
    return a - b;
};

// Mutiplication
const mul = (a, b) => {
    return a * b;
};

// Division
const div = (a, b) => {
    return a / b;
};

// Modulus
const mod = (a, b) => {
    return a % b;
};

// sayHi(j);
// sayHi(p);
// sayHi(s);
// console.log(add(-5.5,9.7));
// console.log(sub(-9.6,-8.7));
// console.log(mul(7.7,9));
// console.log(div(6,9));
// console.log(mod(-4,7));

// Exporting the current module members & methods to other modules
module.exports = {
    j,
    p,
    s,
    add,
    sub,
    mul,
    div,
    mod
};