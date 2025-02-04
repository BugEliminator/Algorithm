const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let str1 = input[0];    // apple
    let str2 = input[1];    // pen
    let result = str1 + str2    // applepen
    console.log(result)
});