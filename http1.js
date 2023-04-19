// Importing the http module
const http = require('http');

// Creating a server object
const server = http.createServer((req, res)=>{
    if(req.url==='/')
        res.end('Home Page');
    else if(req.url==='/guiui')
        res.end('Yard page');
    else{
        res.end(`
        <h1>Oops!</h1> 
        <p>We are unable to find the requested page</p>
        <a href="/">Back to home</a>    
        `);
    }
});

// Assigning the server to a port
const port_no=3000;
server.listen(port_no);
console.log(`Port is listening at port ${port_no}`);
// server.close((err)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
// });