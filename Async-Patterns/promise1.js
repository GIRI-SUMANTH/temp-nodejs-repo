const {readFile, writeFile}= require('fs');
const util = require('util');

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err,data)=>{
            if(err)
                reject(err);
            else
                resolve(data);
        });
    });
};

const start = async() => {
    try{
        const first = await getText(p1);
        console.log(first);
    }
    catch(err){
        console.log(err);
    }
}

let p1 = "D:\\OneDrive\\Desktop\\RJ\\NodeJS\\content\\first.txt";
// getText(p1).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)});

start();