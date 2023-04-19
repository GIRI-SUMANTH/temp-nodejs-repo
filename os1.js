// Import inbuilt OS module
const os = require('os');

// Directories
console.log('Home Directory : ', os.homedir(), '\nTemperory files Directory : ', os.tmpdir());

// OS type
console.log('OS Type : ', os.type());

// curr user info
const user = os.userInfo();
console.log('User Info : ', user);

// system uptime in secs
const time = os.uptime();
console.log('Active Time : ', time);

// OS info
const info_os = {
    name: os.type(),
    release: os.release(),
    curr_ver: os.version(),
    totMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log('Current OS Info  :  ', info_os);