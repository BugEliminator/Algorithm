const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input[0].split(' ');
const A = parseInt(data[0]);
const B = parseInt(data[1]);

console.log(A * B)