const fs = require('fs');

fs.readFile('quote.txt', 'utf8', (error, contents ) => {
    console.log(contents);
})