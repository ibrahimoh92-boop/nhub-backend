const fs = require('fs');
const http = require('http');
const chalk = require('chalk');
const path = require('path');

// const server = http.createServer((req, res) => {
//     console.log(chalk.green('request received'));
// const data = fs.readFile("data.txt","utf-8", function(err,data) {
//     if (err) {
//         console.log("wrong");
//         return;
//     }
//     console.log(`2nd , ${data}`);    
    
// });
// console.log('third 3');

// fs.writeFile('data.txt','this is the new data1', function(err) {
//     if (err) {
//         console.log('something went wrong', err.message);
//         return;
//     }

//     console.log('file has been written successfully');
    
// });


    // res.end('hello from this server')
    //res.end: send response and end it.
// });

// server.listen(2010, () => {
//     console.log('server is running on port 2010')

// });

//npm.
// console.log(chalk.blue('hello world'));


const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    if (req.url === '/') {
        fs.readFile(filePath, 'utf-8', function(err, data) {
            if (data) {
                console.log(chalk.green('User visited the homepage'));
                res.end(data);
            }else{
                console.log(chalk.red('Error reading the file:', err));
                res.end('<h1><i>500</i> Internal Server Error</h1>');
            }
        });
    } else {
        console.log(chalk.red('User visited an non-existent page'));
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1><i>404</i> Page not found</h1>');
    }
});

server.listen(2010, () => {
    console.log(chalk.blue('server is running on http://localhost:2010'));
});