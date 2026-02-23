console.log("readFile");

const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});


console.log('Write file');

const fs = require('fs');
fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});


console.log('web server');

const http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('Hello World!');
 res.end();
}).listen(8080);


console.log("Http request");

const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
 let data = '';
 resp.on('data', (chunk) => {
 data += chunk;
 });
 resp.on('end', () => {
 console.log(JSON.parse(data));
 });
}).on('error', (err) => {
 console.log("Error: " + err.message);

});
  

console.log("Modules");

const myModule = require('./my-module.js');
console.log(myModule.myFunction());


console.log("Promise ");

const myPromise = new Promise((resolve, reject) => {
 if (condition) {
 resolve('Success!');
 } else {
 reject('Failure!');
 }
});
myPromise.then((result) => {
 console.log(result);
}).catch((error) => {
 console.log(error);
});


console.log("Async/Await");

async function myFunction() {
 try {
 const result = await myPromise;
 console.log(result);
 } catch (error) {
 console.log(error);
 }
}
myFunction();

console.log("Greeting from Sachintha");

for (let i = 0; i < 5; i++) {
 console.log("Hello, Kaweesha!");
}