// node-js app

const fs = require('fs');
//let quote = 'Be yourself. Everyone else is already taken.';
// const file = fs.createWriteStream('OscarWilide.txt');



// for (i =0 ; i < 5; i++){
//     file.write('You can never be overdressed or overeducated.\n');
// } 
// file.end();



 

// fs.writeFile('OscarWilde.txt', quote, (err) => {
//     console.log('Quote saved!');
//  });

// fs.readFile('quote.txt', 'utf8', (error, contents ) => {
//     console.log(contents);
// });

// const read = fs.readFile('OscarWild.txt');
// const write = fs.writeFile('quote.txt');
// read.pipe(write);

/// Övning 1 

let quote2 = 'Why, sometimes I´ve believed as many as six impossible things before lunch ';
const file2 = fs.createWriteStream('alicequotes.txt');
fs.writeFile('alicequote.txt', quote2, (err) =>{
    console.log(quote2);
})