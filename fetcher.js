const fs = require('fs');
const request = require('request');

const args = process.argv.splice(2);
console.log(args[0])
console.log(args[1])

request(args[0], (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 

  fs.writeFile(args[1], body, error => {
    if (error) {
      console.log('error')
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}}`)
  })
});