// Synchronous & Single Threaded

console.log('First task');
console.time();
for(let i=0;i<1000;i++)
{
    console.log('Waiting');
}
console.timeEnd();
console.log('Next task');

// Offloading --> 
// Async methods like  writeFile, readFile, setTimeout, setInterval, listen

console.log('FIrst Task');
setTimeout(()=>{
    console.log('Waiting');
},0);
console.log('Next task');

// setInterval

setInterval(()=>{
    console.log('Hello');
},2000  );
console.log('First');